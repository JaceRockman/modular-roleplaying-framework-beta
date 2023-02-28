(ns beta.web.main
  (:require [ajax.core :as ajax]
            [kee-frame.core :as kf]
            [re-frame.core :as rf]
            [day8.re-frame.http-fx]
            [reagent.dom.client :as rdom]
            [beta.creature.interface :as creature]
  ;  [mount.core :as mount :refer [defstate]]
            ))

(kf/reg-event-fx
 :go-to-page
 (fn [{:keys [db]} [_ page-no]]
   {:db db
    :navigate-to [:page {:page-no page-no}]}))

(def initial-db {:some-data "data"})

(def routes
  [["/" :home]
   ["/page/:page-no" :page]])

(defn app []
  (kf/case-route
   (fn [route]
     (-> route :data :name))
   :home [:div
          [:a {:href (kf/path-for [:page {:page-no 1}])} "Page 1"]
          [:a {:href (kf/path-for [:page {:page-no 2}])} "Page 2"]]
   :page [:div "Page"]
   [:div "Page not Found"]))

(defn main! []
  (kf/start! {:initial-db initial-db
              :routes routes
              :root-component [app]}))



(kf/reg-controller :page
                   {:params (fn [route-data]
                              (when (-> route-data :data :name (= :page))
                                (-> route-data
                                    :path-params
                                    :page-no)))
                    :start  (fn [ctx page-no] [:page/load page-no])})

(kf/reg-chain :page/load

              (fn [ctx [page-no]]
                (println (str "Page Loading: " page-no)) ;; We are getting here!
                ;; The issue I'm running into is figuring out how to format the http request here
                ;; But once that is figured out, then I will be able to connect the database stuff
                ;; to the front end code
                {:http-xhrio {:method :get
                              :uri    "localhost:8080/page"
                              :format          (ajax/json-request-format)
                              :response-format (ajax/json-response-format {:keywords? true})}})

              (fn [{:keys [db]} [_ page-data]]
                (println page-data)
                {:db (assoc db :page page-data)}))

(main!)


; (defn simple-render [component]
;   (rdom/render
;    (rdom/create-root
;     (.getElementById js/document "app"))
;    [component]))

; (simple-render creature/creature-list)


;; I don't have the mount stuff working yet, but I think this is kind of what
;; it will look like

; (mount/in-cljc-mode)

; (defstate app
;   :start (simple-render creature/creature-list))
