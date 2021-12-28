import { People } from "../../components/People";
import { usePeople } from "../../context/PeopleContext";

const PeopleIndex = () => {
  const { people } = usePeople();

  return (
    <div className="l-page">
      <People people={people} />
    </div>
  );
};

export default PeopleIndex;
