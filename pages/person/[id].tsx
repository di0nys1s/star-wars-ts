import { Person } from "../../components/Person";
import { usePeople } from "../../context/PeopleContext";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const PersonIndex = () => {
  const router = useRouter();
  const { id } = router.query;
  const { people } = usePeople();

  const [selectedPerson, setSelectedPerson] = useState(
    people.find((person) => person.id === id)
  );

  useEffect(() => {
    if (!id) {
      return;
    }

    setSelectedPerson(people.find((person) => person.id === id));
  }, [id, people]);

  return (
    <div className="l-page">
      <Person
        id={String(selectedPerson?.id)}
        name={selectedPerson?.name}
        gender={selectedPerson?.gender}
        height={selectedPerson?.height}
        mass={selectedPerson?.mass}
        eye_color={selectedPerson?.eye_color}
        skin_color={selectedPerson?.skin_color}
      />
    </div>
  );
};

export default PersonIndex;
