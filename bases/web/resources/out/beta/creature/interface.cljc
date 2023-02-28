(ns beta.creature.interface
  (:require [beta.creature.core :as creature]))

(defn creature-list []
  (creature/all-creatures creature/mock-db))
