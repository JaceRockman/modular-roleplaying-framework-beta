(ns beta.database.interface.resources)

;; This will probably not be living in the database component forever.

(def resource-schema [{:db/ident :resource/id
                       :db/valueType :db.type/uuid
                       :db/cardinality :db.cardinality/one
                       :db/unique :db.unique/identity
                       :db/doc "a resource's unique identifier"}

                      {:db/ident :resource/creator
                       :db/valueType :db.type/ref
                       :db/cardinality :db.cardinality/one
                       :db/doc "the user that created the resource"}

                      {:db/ident :resource/name
                       :db/valueType :db.type/string
                       :db/cardinality :db.cardinality/one
                       :db/doc "a resource's name which does not have to be unique"}

                      {:db/ident :resource/domain
                       :db/valueType :db.type/ref
                       :db/cardinality :db.cardinality/one
                       :db/doc "a resource's domain that determines its type (default: equipment, trait, expertise, affiliation, item)"}

                      {:db/ident :resource/properties
                       :db/valueType :db.type/ref
                       :db/cardinality :db.cardinality/many
                       :db/doc "the list of properties that apply to the resource"}

                      {:db/ident :resource/quality-name
                       :db/valueType :db.type/string
                       :db/cardinality :db.cardinality/one
                       :db/doc "the name displayed for the resource's quality"}

                      {:db/ident :resource/quality-value
                       :db/valueType :db.type/long
                       :db/cardinality :db.cardinality/one
                       :db/doc "the quality bonus or penalty granted by the resource"}

                      {:db/ident :resource/power-name
                       :db/valueType :db.type/string
                       :db/cardinality :db.cardinality/one
                       :db/doc "the name displayed for the resource's power"}

                      {:db/ident :resource/power-value
                       :db/valueType :db.type/long
                       :db/cardinality :db.cardinality/one
                       :db/doc "the power bonus or penality granted by the resource"}

                      {:db/ident :resource/description
                       :db/valueType :db.type/string
                       :db/cardinality :db.cardinality/one
                       :db/doc "the non-mechanical flavortext of the resource"}])