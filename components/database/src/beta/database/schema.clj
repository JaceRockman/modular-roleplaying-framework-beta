(ns beta.database.schema
  (:require [datomic.client.api :as d]))

#_"The creature schema has attributes that refer to the following:
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
                       :db/isComponent true
                       :db/doc "a list of domain that this creature can interact within"}

                      {:db/ident :creature/resources
                       :db/valueType :db.type/ref
                       :db/cardinality :db.cardinality/many
                       :db/doc "a list of resources that belong to a creature"}

                      {:db/ident :creature/actions
                       :db/valueType :db.type/ref
                       :db/cardinality :db.cardinality/many
                       :db/isComponent true
                       :db/doc "a list of actions that the creature is able to take"}

                      {:db/ident :creature/notes
                       :db/valueType :db.type/string
                       :db/cardinality :db.cardinality/many
                       :db/doc "a list of additional notes related to a creature"}])

(def creator-schema [{:db/ident :creator/id
                      :db/valueType :db.type/uuid
                      :db/cardinality :db.cardinality/one
                      :db/unique :db.unique/identity
                      :db/doc "a creator's unique identifier"}

                     {:db/ident :creator/name
                      :db/valueType :db.type/string
                      :db/cardinality :db.cardinality/one
                      :db/doc "a creator's name"}

                     {:db/ident :creator/portrait
                      :db/valueType :db.type/uri
                      :db/cardinality :db.cardinality/one
                      :db/doc "a creator's profile picture"}

                     {:db/ident :creator/email
                      :db/valueType :db.type/string
                      :db/cardinality :db.cardinality/one
                      :db/unique :db.unique/identity
                      :db/doc "a creator's unique email address"}])

(def race-schema [])

(def domain-schema [{:db/ident :domain/names
                     :db/valueType :db.type/ref
                     :db/cardinality :db.cardinality/one
                     :db/doc "a reference to the domain's namings"}

                    {:db/ident :domain/values
                     :db/valueType :db.type/ref
                     :db/cardinality :db.cardinality/one
                     :db/isComponent true
                     :db/doc "a reference to the domain's values"}])

(def domain-names-schema [{:db/ident :domain-names/id
                          :db/valueType :db.type/uuid
                          :db/cardinality :db.cardinality/one
                          :db/unique :db.unique/identity
                          :db/doc "a domain's unique identifier"}

                         {:db/ident :domain-names/name
                          :db/valueType :db.type/string
                          :db/cardinality :db.cardinality/one
                          :db/doc "a domain's title that should indicate it's use"}

                         {:db/ident :domain-names/icon
                          :db/valueType :db.type/ref
                          :db/cardinality :db.cardinality/one
                          :db/doc "a domain's icon"}

                         {:db/ident :domain-names/resource-type-title
                          :db/valueType :db.type/string
                          :db/cardinality :db.cardinality/one
                          :db/doc "the title used for resource types to link them to this domain"}

                         {:db/ident :domain-names/quality-title
                          :db/valueType :db.type/string
                          :db/cardinality :db.cardinality/one
                          :db/doc "the title used for this domain's quality (default is skills)"}

                         {:db/ident :domain-names/initiation-title
                          :db/valueType :db.type/string
                          :db/cardinality :db.cardinality/one
                          :db/doc "the title used for this domain's initiation stat"}

                         {:db/ident :domain-names/reaction-title
                          :db/valueType :db.type/string
                          :db/cardinality :db.cardinality/one
                          :db/doc "the title used for this domain's reaction stat"}

                         {:db/ident :domain-names/continuation-title
                          :db/valueType :db.type/string
                          :db/cardinality :db.cardinality/one
                          :db/doc "the title used for this domain's continuation stat"}

                         {:db/ident :domain-names/power-title
                          :db/valueType :db.type/string
                          :db/cardinality :db.cardinality/one
                          :db/doc "the title used for this domain's power (default is abilities)"}

                         {:db/ident :domain-names/dominance-title
                          :db/valueType :db.type/string
                          :db/cardinality :db.cardinality/one
                          :db/doc "the title used for this domain's dominance stat"}

                         {:db/ident :domain-names/competence-title
                          :db/valueType :db.type/string
                          :db/cardinality :db.cardinality/one
                          :db/doc "the title used for this domain's competence stat"}

                         {:db/ident :domain-names/resilience-title
                          :db/valueType :db.type/string
                          :db/cardinality :db.cardinality/one
                          :db/doc "the title used for this domain's resilience stat"}])

(def domain-values-schema [{:db/ident :domain-value/id
                            :db/valueType :db.type/uuid
                            :db/cardinality :db.cardinality/one
                            :db/unique :db.unique/identity
                            :db/doc "a domain value record's unique identifier"}

                           {:db/ident :domain-value/damage
                            :db/valueType :db.type/tuple
                            :db/cardinality :db.cardinality/one
                            :db/tupleType :db.type/long
                            :db/doc "the damage accrued in a domain"}

                           {:db/ident :domain-value/initiation
                            :db/valueType :db.type/long
                            :db/cardinality :db.cardinality/one
                            :db/doc "the value for this domain's initiation stat"}

                           {:db/ident :domain-value/reaction
                            :db/valueType :db.type/long
                            :db/cardinality :db.cardinality/one
                            :db/doc "the value for this domain's reaction stat"}

                           {:db/ident :domain-value/continuation
                            :db/valueType :db.type/long
                            :db/cardinality :db.cardinality/one
                            :db/doc "the value for this domain's continuation stat"}

                           {:db/ident :domain-value/dominance
                            :db/valueType :db.type/long
                            :db/cardinality :db.cardinality/one
                            :db/doc "the value for this domain's dominance stat"}

                           {:db/ident :domain-value/competence
                            :db/valueType :db.type/long
                            :db/cardinality :db.cardinality/one
                            :db/doc "the value for this domain's competence stat"}

                           {:db/ident :domain-value/resilience
                            :db/valueType :db.type/long
                            :db/cardinality :db.cardinality/one
                            :db/doc "the value for this domain's resilience stat"}])

(def domain-icon-schema [{:db/ident :icon/id
                          :db/valueType :db.type/uuid
                          :db/cardinality :db.cardinality/one
                          :db/unique :db.unique/identity
                          :db/doc "a domain icon's unique id"}

                         {:db/ident :icon/name
                          :db/valueType :db.type/string
                          :db/cardinality :db.cardinality/one
                          :db/doc "a domain icon's name"}

                         {:db/ident :icon/source
                          :db/valueType :db.type/string
                          :db/cardinality :db.cardinality/one
                          :db/doc "the unique resource identifier for this icon"}])

(def resource-schema [#:db{:ident :resource/id
                           :valueType :db.type/uuid
                           :cardinality :db.cardinality/one
                           :unique :db.unique/identity
                           :doc "the unique UUID for this resource"}

                      #:db{:ident :resource/creator
                           :valueType :db.type/ref
                           :cardinality :db.cardinality/one
                           :doc "the original creator of the resource"}

                      #:db{:ident :resource/domain
                           :valueType :db.type/ref
                           :cardinality :db.cardinality/one
                           :doc "the primary domain that this resource functions within"}

                      #:db{:ident :resource/name
                           :valueType :db.type/string
                           :cardinality :db.cardinality/one
                           :doc "the resource's name"}

                      #:db{:ident :resource/image
                           :valueType :db.type/uri
                           :cardinality :db.cardinality/one
                           :doc "a uri to an image of the resource"}

                      #:db{:ident :resource/properties
                           :valueType :db.type/ref
                           :cardinality :db.cardinality/many
                           :doc "a list of properties that define the mechanical aspects of the resource"}

                      #:db{:ident :resource/benefit-names
                           :valueType :db.type/tuple
                           :tupleType :db.type/string
                           :cardinality :db.cardinality/one
                           :doc "a tuple of the names for the resource's benefits (defaults to Quality and Power)"}

                      #:db{:ident :resource/benefit-values
                           :valueType :db.type/tuple
                           :tupleType :db.type/long
                           :cardinality :db.cardinality/one
                           :doc "a tuple of the values for the resource's benefits"}

                      #:db{:ident :resource/description
                           :valueType :db.type/string
                           :cardinality :db.cardinality/one
                           :doc "a description of the item"}])

(def action-schema [#:db{:ident :action/id
                         :valueType :db.type/uuid
                         :cardinality :db.cardinality/one
                         :unique :db.unique/identity
                         :doc "the unique UUID for this action"}

                    #:db{:ident :action/creator
                         :valueType :db.type/ref
                         :cardinality :db.cardinality/one
                         :doc "the original creator of the action"}

                    #:db{:ident :action/domain
                         :valueType :db.type/ref
                         :cardinality :db.cardinality/one
                         :doc "the primary domain that this action functions within"}

                    #:db{:ident :action/name
                         :valueType :db.type/string
                         :cardinality :db.cardinality/one
                         :doc "the action's name"}

                    #:db{:ident :action/skill
                         :valueType :db.type/ref
                         :cardinality :db.cardinality/one
                         :doc "the skill that this action uses to determine the base dice pool"}

                    #:db{:ident :action/ability
                         :valueType :db.type/ref
                         :cardinality :db.cardinality/one
                         :doc "the ability that this action uses to determine the base dice pool"}

                    #:db{:ident :action/resources
                         :valueType :db.type/ref
                         :cardinality :db.cardinality/many
                         :doc "a list of resources that add bonuses to the dice pool"}

                    #:db{:ident :action/description
                         :valueType :db.type/string
                         :cardinality :db.cardinality/one
                         :doc "a description of the action"}])


#_"This will be for the transaction that builds out the database"
(def merged-schemas
  (concat
   creature-schema
   creator-schema
   race-schema
   domain-schema
   domain-names-schema
   domain-values-schema
   domain-icon-schema
   resource-schema
   action-schema))

(defn schema-builder
  [ident type doc & additional]
  (merge {:db/ident ident
          :db/valueType type
          :db/cardinality :db.cardinality/one
          :db/doc doc}
         additional))

#_(map schema-builder
     [:resource/id :resource/creator :resource/domain :resource/name :resource/image :resource/properties :resource/benefit-names :resource/benefit-values :resource/description]
     (mapv #(keyword (str "db.type/" %)) ["string" "ref" "ref" "string" "uri" "ref" "tuple" "tuple" "string"])
     ["the unique UUID for this resource"
      "the original creator of the resource"
      "the primary domain that this resource functions within"
      "the resource's name"
      "a uri to an image of the resource"
      "a list of properties that define the mechanical aspects of the resource"
      "a tuple of the names for the resource's benefits (defaults to Quality and Power)"
      "a tuple of the values for the resource's benefits"
      "a description of the item"])

#_(map schema-builder
     (mapv #(keyword (str "action/" (name %))) [:id :creator :domain :name :skill :ability :resources :description])
     (mapv #(keyword (str "db.type/" (name %))) [:uuid :ref :ref :string :ref :ref :ref :string])
     ["the unique UUID for this action"
      "the original creator of the action"
      "the primary domain that this action functions within"
      "the action's name"
      "the skill that this action uses to determine the base dice pool"
      "the ability that this action uses to determine the base dice pool"
      "a list of resources that add bonuses to the dice pool"
      "a description of the action"])