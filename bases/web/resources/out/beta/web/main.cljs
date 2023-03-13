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
 (fn [_ [page-no]]
   {:navigate-to [:page {:page-no page-no}]}))

(kf/reg-event-fx
 :open-creature-sheet
 (fn [_ [creature-id]]
   {:navigate-to [:creature {:id creature-id}]}))

(kf/reg-event-fx
 :page-load-failure
 (fn [{:keys [db]} _]
   (:db (assoc db :page-load-success false))))

(rf/reg-sub
 :page-load-status
 (fn [db _]
   (:page-load-success db)))

(rf/reg-sub
 :active-creature
 (fn [db _]
   (:active-creature db)))


(def initial-db {:some-data "data"})

(def routes
  [["/" :home]
   ["/page/:page-no" :page]
   ["/creature/:id" :creature]])

(defn app []
  (kf/case-route
   (fn [route]
     (-> route :data :name))
   :home [:div
          [:button {:on-click #(rf/dispatch [:go-to-page 1])} "Page 1"]
          [:button {:on-click #(rf/dispatch [:open-creature-sheet 74766790688878])} "Aleksander"]
          [:a {:href (kf/path-for [:page {:page-no 1}])} "Page 1"]
          [:a {:href (kf/path-for [:page {:page-no 2}])} "Page 2"]]
   :page [:div
          [:div {:style {:color (if (deref (rf/subscribe [:page-load-status])) "green" "red")}} "Page Stuff"]
          (if (not (deref (rf/subscribe [:page-load-status])))
            [:div
             [:a {:href (kf/path-for [:home])} "Home"]])]
   :creature (do (println "Creature ID: " (deref (rf/subscribe [:active-creature])))
                 (creature/creature-display 74766790688878
                  ; (deref (rf/subscribe [:active-creature]))
                  ))
   [:div "Page not Found"]))

(defn main! []
  (kf/start! {:initial-db initial-db
              :routes routes
              :root-component [app]}))


(kf/reg-controller :creature
                   {:params (fn [route-data]
                              (when (-> route-data :data :name (= :creature))
                                (-> route-data
                                    :path-params
                                    :id)))
                    :start  (fn [ctx id] [:creature/load id])})

(kf/reg-chain :creature/load

              (fn [ctx [id]]
                {:http-xhrio {:method          :get
                              :uri             (str "http://localhost:8000/creature/" id)
                              :timeout         8000
                              :format          (ajax/json-request-format)
                              :response-format (ajax/text-response-format)
                              :on-failure      [:page-load-failure]}})

              (fn [{:keys [db]} [_ creature-id]]
                (println (str "Creature: " creature-id))
                {:db (assoc db :active-creature creature-id)})) ; Seems like this isn't happening

(kf/reg-controller :page
                   {:params (fn [route-data]
                              (when (-> route-data :data :name (= :page))
                                (-> route-data
                                    :path-params
                                    :page-no)))
                    :start  (fn [ctx page-no] [:page/load page-no])})

(kf/reg-chain :page/load

              (fn [ctx [page-no]]
                {:http-xhrio {:method          :get
                              :uri             "http://localhost:8000/page"
                              :timeout         8000
                              :format          (ajax/json-request-format)
                              :response-format (ajax/text-response-format)
                              :on-failure      [:page-load-failure]}})

              (fn [{:keys [db]} [_ page-no]]
                {:db (assoc db :page-load-success true)}))

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
