(ns beta.database.interface.creatures
  (:require [datomic.client.api :as d]
            [beta.database.interface.domains :as domains]))

;; This will probably not live in the database component


(def creature-races [{:db/ident :race/elf}
                     {:db/ident :race/human}
                     {:db/ident :race/dwarf}])

(defn init-creature
  [creator-entity-id domain-entity-ids]
  (println domain-entity-ids)
  [{:creature/id (java.util.UUID/randomUUID)
    :creature/creator creator-entity-id
    :creature/name "New Creature"
    :creature/domains domain-entity-ids}])

(defn example-creatures
  [default-domain-entities]
  [{:creature/id (java.util.UUID/randomUUID)
    :creature/domains default-domain-entities
    :creature/name "aleksander"
    :creature/race [:race/elf :race/human]}
   {:creature/id (java.util.UUID/randomUUID)
    :creature/domains default-domain-entities
    :creature/name "eilonwey"
    :creature/race :race/elf}
   {:creature/id (java.util.UUID/randomUUID)
    :creature/domains default-domain-entities
    :creature/name "durflag"
    :creature/race :race/dwarf}])

(defn new-creature-defaults
  "A transaction schema for a new creature"
  []
  {:creature/id (java.util.UUID/randomUUID)})


;; Pull Patterns
;; Pull patterns define the structure of the data to be returned given an entity id

(def pull-full-creature
  ['* :creature/race {:creature/domains ['*]}])

(def pull-creature-name
  [:creature/name])


;; Queries
;; Queries retrieve entity ids, attributes, values, and times from the database

(defn get-all-creatures
  "Query for getting all of the creatures in the database.

  Arguments:
   - db connection
   - Pull Pattern
  Returns:
   - creature entity data structured with the given pull pattern"
  [db pattern]
  (map first
       (d/q '{:find [(pull ?eid pattern)]
              :in [$ pattern]
              :where [[?eid :creature/name]]}
            db
            pattern)))

(defn get-creature-by-name
  "Returns creature information for all creature's with a given name

  Arguments:
   - db connection
   - Pull Pattern for a creature entity
   - A String that matches on the :creature/name value
  Returns:
   - creature entity data structured with the given pull pattern"
  [db pattern creature-name]
  (map first
       (d/q '{:find [(pull ?eid pattern)]
              :in [$ pattern ?creature-name]
              :where [[?eid :creature/name ?creature-name]]}
            db
            pattern
            creature-name)))


(defn get-creature-by-id
  "Returns creature information for a creature with a given id

  Arguments:
   - db connection
   - Pull Pattern for a creature entity
   - An Int that matches on the :creature/id value
  Returns:
   - creature entity data structured with the given pull pattern"
  [db pattern creature-id]
  (map first
       (d/q '{:find [(pull ?eid pattern)]
              :in [$ pattern ?creature-id]
              :where [[?eid :creature/id ?creature-id]]}
            db
            pattern
            (parse-uuid creature-id))))

;; Transactions
;; Transactions accumulate datoms to the databse

(defn create-creature
  "Takes transaction data for a creature and adds a new creature to the database"
  [conn creature-tx-data]
   (d/transact conn {:tx-data [(merge creature-tx-data {:creature/id (java.util.UUID/randomUUID)})]}))

(defn update-creature
  "Takes a creature uuid and updates it with the provided transaction data"
  [conn creature-uuid creature-tx-data]
  (d/transact conn {:tx-data [(merge creature-tx-data {:creature/id creature-uuid})]}))

(defn retract-creature
  "Retracts all datoms where the entity id or value is equal to the provided creature-id"
  [conn creature-uuid]
  (d/transact conn {:tx-data [[:db/retractEntity [:creature/id creature-uuid]]]}))