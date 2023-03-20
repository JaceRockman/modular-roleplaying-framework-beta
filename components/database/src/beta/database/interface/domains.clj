(ns beta.database.interface.domains)

;; This probably will not live the in the database component


(defn default-domain-names
  [[physical-icon spiritual-icon mental-icon social-icon]]
  [{:domain-names/id (java.util.UUID/randomUUID)
    :domain-names/name "Physical"
    :domain-names/icon physical-icon
    :domain-names/resource-type-title "Equipment"
    :domain-names/initiation-title "Coordination"
    :domain-names/reaction-title "Reflexes"
    :domain-names/continuation-title "Endurance"
    :domain-names/dominance-title "Might"
    :domain-names/competence-title "Finesse"
    :domain-names/resilience-title "Fortitude"}

   {:domain-names/id (java.util.UUID/randomUUID)
    :domain-names/name "Spiritual"
    :domain-names/icon spiritual-icon
    :domain-names/resource-type-title "Trait"
    :domain-names/initiation-title "Exertion"
    :domain-names/reaction-title "Instinct"
    :domain-names/continuation-title "Perseverance"
    :domain-names/dominance-title "Willpower"
    :domain-names/competence-title "Discipline"
    :domain-names/resilience-title "Tenacity"}

   {:domain-names/id (java.util.UUID/randomUUID)
    :domain-names/name "Mental"
    :domain-names/icon mental-icon
    :domain-names/resource-type-title "Expertise"
    :domain-names/initiation-title "Concentration"
    :domain-names/reaction-title "Recognition"
    :domain-names/continuation-title "Comprehension"
    :domain-names/dominance-title "Intellect"
    :domain-names/competence-title "Focus"
    :domain-names/resilience-title "Stability"}

   {:domain-names/id (java.util.UUID/randomUUID)
    :domain-names/name "Social"
    :domain-names/icon social-icon
    :domain-names/resource-type-title "Affiliation"
    :domain-names/initiation-title "Persuasion"
    :domain-names/reaction-title "Insight"
    :domain-names/continuation-title "Connections"
    :domain-names/dominance-title "Presence"
    :domain-names/competence-title "Wit"
    :domain-names/resilience-title "Poise"}])


(defn default-domain-values [] [{:domain-value/id (java.util.UUID/randomUUID)
                                 :domain-value/damage [0 0]
                                 :domain-value/initiation 1
                                 :domain-value/reaction 1
                                 :domain-value/continuation 1
                                 :domain-value/dominance 6
                                 :domain-value/competence 6
                                 :domain-value/resilience 6}])

(def default-domain-icons [{:icon/id (java.util.UUID/randomUUID)
                            :icon/name "Physical"
                            :icon/source "/resources/database/physical.ico"}

                           {:icon/id (java.util.UUID/randomUUID)
                            :icon/name "Spiritual"
                            :icon/source "/resources/database/spiritual.ico"}

                           {:icon/id (java.util.UUID/randomUUID)
                            :icon/name "Mental"
                            :icon/source "/resources/database/mental.ico"}

                           {:icon/id (java.util.UUID/randomUUID)
                            :icon/name "Social"
                            :icon/source "/resources/database/social.ico"}])

(defn default-domains [domain-names domain-values]
  (let [domain-maker (fn [name value]
                       {:domain/names name
                        :domain/values value})]
    (vec (map domain-maker domain-names domain-values))))
