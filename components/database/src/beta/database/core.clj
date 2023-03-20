(ns beta.database.core
  (:require [datomic.client.api :as d]
            [beta.database.schema :as schema]
            [beta.database.interface.creator :as creator]
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
  (do (d/transact conn {:tx-data schema/merged-schemas})
      (d/transact conn {:tx-data creator/avis-industries-creator})
      (def init-creator-entity (first (flatten (d/q '[:find ?e
                                                      :where [?e :creator/id]]
                                                    (db)))))
      (d/transact conn {:tx-data domains/default-domain-icons})
      (def init-icon-entities (vec (flatten (d/q '[:find ?e
                                                   :where [?e :icon/id]]
                                                 (db)))))
      (d/transact conn {:tx-data (domains/default-domain-names init-icon-entities)})
      (def default-domain-name-entities (vec (flatten (d/q '[:find ?e
                                                             :where [?e :domain-names/id]]
                                                           (db)))))
      (d/transact conn {:tx-data (domains/default-domain-values)})
      (d/transact conn {:tx-data (domains/default-domain-values)})
      (d/transact conn {:tx-data (domains/default-domain-values)})
      (d/transact conn {:tx-data (domains/default-domain-values)})
      (def default-domain-value-entities (vec (flatten (d/q '[:find ?e
                                                              :where [?e :domain-value/id]]
                                                            (db)))))
      (d/transact conn {:tx-data (domains/default-domains default-domain-name-entities default-domain-value-entities)})
      (def default-domain-entities (vec (flatten (d/q '[:find ?e
                                                         :where [?e :domain/names]]
                                                      (db)))))
      (d/transact conn {:tx-data creatures/creature-races})
      (d/transact conn {:tx-data (creatures/init-creature init-creator-entity default-domain-entities)})))


(comment
  (initialize-db conn db)
  ; I need to get this formatted correctly so that it can be more eaasily used.
  (creatures/get-all-creatures (db) creatures/pull-full-creature)
  ,)

(comment
  (d/delete-database client {:db-name "modular-roleplaying-framework"})
  ,)
