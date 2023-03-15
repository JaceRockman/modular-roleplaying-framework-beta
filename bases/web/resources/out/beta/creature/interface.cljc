(ns beta.creature.interface
  (:require [beta.creature.core :as creature]))

(defn creature-display [creature-data]
  (creature/creature-component creature-data))

(defn creature-list []
  (creature/all-creatures creature/mock-db))
