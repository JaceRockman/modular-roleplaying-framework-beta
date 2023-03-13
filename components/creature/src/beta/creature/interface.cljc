(ns beta.creature.interface
  (:require [beta.creature.core :as creature]))

(defn creature-display [creature-id]
  (creature/creature-component (filter #(= creature-id (:db/id %)) creature/mock-db)))

(defn creature-list []
  (creature/all-creatures creature/mock-db))
