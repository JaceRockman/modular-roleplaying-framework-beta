(ns beta.creature.core)

(def mock-db
  '({:db/id 74766790688878,
     :creature/id #uuid "547664ba-b88a-4a82-8f2c-92b1b69a42ce",
     :creature/name "aleksander",
     :creature/race [{:id 83562883711083, :ident :race/elf} {:id 83562883711084, :ident :race/human}],
     :creature/domains
     [{:name "Physical"} {:name "Spiritual"} {:name "Mental"} {:name "Social"}]}
    {:db/id 74766790688879,
     :creature/id #uuid "cfa2f993-7743-456f-b34a-537922bbde7f",
     :creature/name "eilonwey",
     :creature/race [{:id 83562883711083, :ident :race/elf}],
     :creature/domains
     [{:name "Physical"} {:name "Spiritual"} {:name "Mental"} {:name "Social"}]}
    {:db/id 74766790688880,
     :creature/id #uuid "045e28bb-27be-46ec-bf7c-a34ed1ca7a87",
     :creature/name "durflag",
     :creature/race [{:id 83562883711085, :ident :race/dwarf}],
     :creature/domains
     [{:name "Physical"} {:name "Spiritual"} {:name "Mental"} {:name "Social"}]}))

(defn creature-component [creature-data]
  [:div {:id (:creature/id creature-data)}
   [:div (:creature/name creature-data)]
   [:p "Races: " (interpose ", " (map #(:db/ident %) (:creature/race creature-data)))]
   [:p "Domains: " (interpose ", " (map #(:domain/name %) (:creature/domains creature-data)))]])

(defn all-creatures [creature-list]
  [:div
   [:h {:style {:font-size 18}} "Creatures"]
   (do (map creature-component creature-list))])
