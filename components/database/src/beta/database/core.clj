(ns beta.database.core
  (:require [datomic.client.api :as d]
            [beta.database.schema :as schema]
            [beta.database.interface.domains :as domains]
            [beta.database.interface.creatures :as creatures]))

#_"A lot of this will need a lot of cleanup, I just wanted to get it into a working
state for now so that I can keep testing things out."

(def config {:server-type :dev-local
             :system "datomic-samples"})
(def client (d/client config))
(d/create-database client {:db-name "modular-roleplaying-framework"})
(def conn (d/connect client {:db-name "modular-roleplaying-framework"}))
(defn db [] (d/db conn))

(defn initialize-db
  [conn db]
  (d/transact conn {:tx-data schema/merged-schemas})
  (d/transact conn {:tx-data domains/default-domains})
  (d/transact conn {:tx-data creatures/creature-races})
  (def init-domain-entities (flatten (d/q '[:find ?e
                                            :where [?e :domain/id]]
                                          (db))))
  ;; Transact the initial creatures
  (d/transact conn {:tx-data (creatures/example-creatures init-domain-entities)}))

(comment
  (initialize-db conn (db))
  (creatures/get-all-creatures (db) creatures/pull-full-creature))

(comment
  (d/delete-database client {:db-name "modular-roleplaying-framework"}))
