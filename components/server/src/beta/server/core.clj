(ns beta.server.core
  (:gen-class)
  (:require [io.pedestal.http :as http]
            [io.pedestal.http.route :as route]
            [beta.creature.interface :as creature]))

(def server
  "This makes it easier to stop and start the server. Eventually this will
   probably be done with Mount"
  (atom nil))

(defn hello-world
  [request]
  (let [name (get-in request [:params :name] "World")]
    {:status 200 :body (str "Hello " name "!\n")}))

(defn page
  [request]
  (let [name (get-in request [:params :name] "World")]
    {:status 200 :body (str "Page " name "!\n")}))

(def routes
  (route/expand-routes
   #{["/greet" :get hello-world :route-name :greet]
     ["/page" :get page :route-name :page]
     ["/creature" :get creature/creature-sheet :creature]}))

(def service {:env                 :prod
              ::http/routes        routes
              ::http/resource-path "/public"
              ::http/type          :jetty
              ::http/port          8080})

(defonce runnable-service (http/create-server service))

(defn start-dev
  "The entry-point for the dev server"
  []
  (println "\nCreating your [DEV] server...")
  (reset!
   server
   (-> service ;; start with production configuration
       (merge {:env :dev
              ;; do not block thread that starts web server
               ::http/join? false
              ;; Routes can be a function that resolve routes,
              ;; we can use this to set the routes to be reloadable
               ::http/routes #(deref #'routes)
              ;; all origins are allowed in dev mode
               ::http/allowed-origins {:creds true :allowed-origins (constantly true)}})
      ;; Wire up interceptor chains
       http/default-interceptors
       http/dev-interceptors
       http/create-server
       http/start)))

(defn stop-dev
  []
  (http/stop @server))

(defn restart-dev
  []
  (stop-dev)
  (reset! server nil)
  (start-dev))

(defn -main
  "The entry-point for the server"
  [& args]
  (println "\nCreating your server...")
  (http/start runnable-service))