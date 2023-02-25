(ns dev
  (:require [mount.core :as mount]))

(defn start [] (mount/start))

(defn stop [] (mount/stop))

(defn restart [] stop start)
