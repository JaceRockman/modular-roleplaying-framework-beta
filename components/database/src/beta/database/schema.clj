(ns beta.database.schema
  (:require [datomic.client.api :as d]))

#_"The creature schema has attributes that refer to the following:
 - creator
 - race
 - domains
 - resources
 - actions
So I will need to define a schema for those as well."
(def creature-schema [{:db/ident :creature/id
                       :db/valueType :db.type/uuid
                       :db/cardinality :db.cardinality/one
                       :db/unique :db.unique/identity
                       :db/doc "the unique id associated with a creature"}

                      {:db/ident :creature/creator
                       :db/valueType :db.type/ref
                       :db/cardinality :db.cardinality/one
                       :db/doc "the user that created a creature"}

                      {:db/ident :creature/name
                       :db/valueType :db.type/string
                       :db/cardinality :db.cardinality/one
                       :db/doc "the name used to refer to a creature"}

                      {:db/ident :creature/portrait
                       :db/valueType :db.type/uri
                       :db/cardinality :db.cardinality/one
                       :db/doc "a link to a character's portrait"}

                      {:db/ident :creature/gender
                       :db/valueType :db.type/string
                       :db/cardinality :db.cardinality/one
                       :db/doc "a creature's gender if applicable"}

                      {:db/ident :creature/race
                       :db/valueType :db.type/ref
                       :db/cardinality :db.cardinality/many
                       :db/doc "the groups that a creature belongs to inherited at birth"}

                      {:db/ident :creature/titles
                       :db/valueType :db.type/string
                       :db/cardinality :db.cardinality/many
                       :db/doc "any special titles belonging to a creature"}

                      {:db/ident :creature/description
                       :db/valueType :db.type/string
                       :db/cardinality :db.cardinality/one
                       :db/doc "additional flavor text or details that describe the character in depth"}

                      {:db/ident :creature/experience
                       :db/valueType :db.type/long
                       :db/cardinality :db.cardinality/one
                       :db/doc "a creature's accumulated experience points"}

                      {:db/ident :creature/domains
                       :db/valueType :db.type/ref
                       :db/cardinality :db.cardinality/many
                       :db/doc "a list of domains that this creature can interact within"}

                      {:db/ident :creature/resources
                       :db/valueType :db.type/ref
                       :db/cardinality :db.cardinality/many
                       :db/doc "a list of resources that belong to a creature"}

                      {:db/ident :creature/actions
                       :db/valueType :db.type/ref
                       :db/cardinality :db.cardinality/many
                       :db/doc "a list of actions that the creature is able to take"}

                      {:db/ident :creature/notes
                       :db/valueType :db.type/string
                       :db/cardinality :db.cardinality/many
                       :db/doc "a list of additional notes related to a creature"}])

(def creator-schema [])

(def race-schema [])

(def domain-schema [{:db/ident :domain/id
                     :db/valueType :db.type/uuid
                     :db/cardinality :db.cardinality/one
                     :db/unique :db.unique/identity
                     :db/doc "a domain's unique identifier"}

                    {:db/ident :domain/name
                     :db/valueType :db.type/string
                     :db/cardinality :db.cardinality/one
                     :db/doc "a domain's title that should indicate it's use"}

                    {:db/ident :domain/icon
                     :db/valueType :db.type/ref
                     :db/cardinality :db.cardinality/one
                     :db/doc "a domain's icon"}

                    {:db/ident :domain/quality-damage
                     :db/valueType :db.type/tuple
                     :db/cardinality :db.cardinality/one
                     :db/tupleType :db.type/long
                     :db/doc "the damage accrued in a domain"}

                    {:db/ident :domain/resource-type-title
                     :db/valueType :db.type/string
                     :db/cardinality :db.cardinality/one
                     :db/doc "the title used for resource types to link them to this domain"}

                    ;; {:db/ident :domain/quality-title
                    ;;  :db/valueType :db.type/string
                    ;;  :db/cardinality :db.cardinality/one
                    ;;  :db/doc "the title used for this domain's quality (default is skills)"}

                    {:db/ident :domain/initiation-title
                     :db/valueType :db.type/string
                     :db/cardinality :db.cardinality/one
                     :db/doc "the title used for this domain's initiation stat"}

                    {:db/ident :domain/initiation-value
                     :db/valueType :db.type/long
                     :db/cardinality :db.cardinality/one
                     :db/doc "the value for this domain's initiation stat"}

                    {:db/ident :domain/reaction-title
                     :db/valueType :db.type/string
                     :db/cardinality :db.cardinality/one
                     :db/doc "the title used for this domain's reaction stat"}

                    {:db/ident :domain/reaction-value
                     :db/valueType :db.type/long
                     :db/cardinality :db.cardinality/one
                     :db/doc "the value for this domain's reaction stat"}

                    {:db/ident :domain/continuation-title
                     :db/valueType :db.type/string
                     :db/cardinality :db.cardinality/one
                     :db/doc "the title used for this domain's continuation stat"}

                    {:db/ident :domain/continuation-value
                     :db/valueType :db.type/long
                     :db/cardinality :db.cardinality/one
                     :db/doc "the value for this domain's continuation stat"}

                    ;; {:db/ident :domain/power-title
                    ;;  :db/valueType :db.type/string
                    ;;  :db/cardinality:db/cardinality :db.cardinality/one
                    ;;  :db/doc "the title used for this domain's power (default is abilities)"}

                    {:db/ident :domain/dominance-title
                     :db/valueType :db.type/string
                     :db/cardinality :db.cardinality/one
                     :db/doc "the title used for this domain's dominance stat"}

                    {:db/ident :domain/dominance-value
                     :db/valueType :db.type/long
                     :db/cardinality :db.cardinality/one
                     :db/doc "the value for this domain's dominance stat"}

                    {:db/ident :domain/competence-title
                     :db/valueType :db.type/string
                     :db/cardinality :db.cardinality/one
                     :db/doc "the title used for this domain's competence stat"}

                    {:db/ident :domain/competence-value
                     :db/valueType :db.type/long
                     :db/cardinality :db.cardinality/one
                     :db/doc "the value for this domain's competence stat"}

                    {:db/ident :domain/resilience-title
                     :db/valueType :db.type/string
                     :db/cardinality :db.cardinality/one
                     :db/doc "the title used for this domain's resilience stat"}

                    {:db/ident :domain/resilience-value
                     :db/valueType :db.type/long
                     :db/cardinality :db.cardinality/one
                     :db/doc "the value for this domain's resilience stat"}])

(def resource-schema [])

(def action-schema [])


#_"This will be for the transaction that builds out the database"
(def merged-schemas
  (concat creature-schema creator-schema race-schema domain-schema resource-schema action-schema))