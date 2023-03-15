(ns beta.database.interface.general
  (:require [beta.database.core :as core]))

(defn initialize-db
  []
  (core/initialize-db core/conn (core/db)))

(def conn core/conn)

(defn db [] (core/db))