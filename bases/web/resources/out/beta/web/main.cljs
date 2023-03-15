(ns beta.web.main
  (:require [ajax.core :as ajax]
            [kee-frame.core :as kf]
            [re-frame.core :as rf]
            [day8.re-frame.http-fx]
            [reagent.dom.client :as rdom]
            [clojure.edn :as edn]
            [beta.creature.interface :as creature]))

(kf/reg-event-fx
 :go-to-page
 (fn [_ [page-no]]
   {:navigate-to [:page {:page-no page-no}]}))

(kf/reg-event-fx
 :open-creature-sheet
 (fn [db [creature-id]]
   {:db (assoc db :active-creature creature-id)
    :navigate-to [:creature {:id creature-id}]}))

(kf/reg-event-fx
 :open-creatures-menu
 (fn [_ [creature-id]]
   {:navigate-to [:creatures]}))

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

(rf/reg-sub
 :active-creature-data
 (fn [db _]
   (let [creatures (:creatures db)
         active-creature-id (:active-creature db)]
     (first (filter #(= (:creature/id %) active-creature-id) creatures)))))

(rf/reg-sub
 :creatures
 (fn [db _]
   (:creatures db)))

(def initial-db {:some-data "data"})

(def routes
  [["/" :home]
   ["/page/:page-no" :page]
   ["/creatures" :creatures]
   ["/creature/:id" :creature]])

(defn creature-button [creature-data]
  (let [creature-id (:creature/id creature-data)
        creature-name (:creature/name creature-data)]
    [:button {:key creature-id
              :on-click #(rf/dispatch [:open-creature-sheet creature-id])}
     creature-name]))

(defn app []
  (kf/case-route
   (fn [route]
     (-> route :data :name))
   :home [:div
          [:button {:on-click #(rf/dispatch [:go-to-page 1])} "Page 1"]
          [:button {:on-click #(rf/dispatch [:go-to-page 2])} "Page 2"]
          [:button {:on-click #(rf/dispatch [:open-creatures-menu])} "Creatures"]]
   :page [:div
          [:div {:style {:color (if (deref (rf/subscribe [:page-load-status])) "green" "red")}} "Page Stuff"]
          (if (not (deref (rf/subscribe [:page-load-status])))
            [:div
             [:a {:href (kf/path-for [:home])} "Home"]])]
   :creatures [:div (map creature-button (deref (rf/subscribe [:creatures])))]
   :creature (do (println (deref (rf/subscribe [:active-creature-data])))
(creature/creature-display (deref (rf/subscribe [:active-creature-data]))))
   [:div "Page not Found"]))

(defn main! []
  (kf/start! {:initial-db initial-db
              :routes routes
              :root-component [app]}))


(kf/reg-controller :creatures
                   {:params (fn [route-data]
                              (-> route-data :data :name (= :creatures)))
                    :start  (fn [ctx _] [:creatures/load])})

(kf/reg-chain :creatures/load

              (fn [ctx _]
                {:http-xhrio {:method          :get
                              :uri             "http://localhost:8000/creatures"
                              :timeout         8000
                              :format          (ajax/json-request-format)
                              :response-format (ajax/text-response-format)
                              :on-failure      [:page-load-failure]}})

              (fn [{:keys [db]} [creature-data]]
                {:db (assoc db :creatures (edn/read-string creature-data))}))

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

              (fn [{:keys [db]} [page-no]]
                {:db (assoc db :page-load-success true)}))

(main!)