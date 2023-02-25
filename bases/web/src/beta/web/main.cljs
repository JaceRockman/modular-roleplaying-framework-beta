(ns beta.web.main
  (:require [reagent.dom.client :as rdom]
            [beta.creature.interface :as creature]
  ;  [mount.core :as mount :refer [defstate]]
            ))

(defn simple-render [component]
  (rdom/render
   (rdom/create-root
    (.getElementById js/document "app"))
   [component]))

(simple-render creature/creature-list)


;; I don't have the mount stuff working yet, but I think this is kind of what
;; it will look like

; (mount/in-cljc-mode)

; (defstate app
;   :start (simple-render creature/creature-list))
