(ns beta.server.interface
  (:require [beta.server.core :as server]))

(defn start-dev
  []
  (server/start-dev))

(defn stop-dev
  []
  (server/stop-dev))

(defn restart-dev
  []
  (server/restart-dev))