(ns beta.server.core
  (:require [beta.database.interface.creatures :as creatures] [beta.database.interface.general :as db-interface]
            [io.pedestal.http :as http]
            [io.pedestal.http.route :as route])
  (:gen-class))

(def server
  "This makes it easier to stop and start the server. Eventually this will
   probably be done with Mount"
  (atom nil))

(defn hello-world
  [request]
  (let [name (get-in request [:path-params :name] "World")]
    {:status 200 :body (str "Hello " name "!\n")}))

(defn page
  [request]
  (let [page-no (get-in request [:path-params :page] "Empty")]
    {:status 200 :body (str "Page " page-no "!\n")}))

(defn creatures
  [request]
  {:status 200 :body (creatures/get-all-creatures (db-interface/db) creatures/pull-full-creature)})

(def routes
  (route/expand-routes
   #{["/greet" :get hello-world :route-name :greet]
     ["/page" :get page :route-name :page]
     ["/creatures" :get creatures :route-name :creatures]}))

(def service {:env                 :prod
              ::http/routes        routes
              ::http/resource-path "/public"
              ::http/type          :jetty
              ::http/port          8000
              ::http/allowed-origins {:creds true :allowed-origins ["http://localhost/9000"]}})

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