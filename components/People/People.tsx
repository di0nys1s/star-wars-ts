import { PeopleProps } from "./People.interfaces";
import Link from "next/link";

const People: React.FC<PeopleProps> = ({ people }) => {
  return (
    <ul className="c-people-list">
      {people.map(({ id, name }) => (
        <Link
          href="/person/[id]"
          as={`/person/${id}`}
          key={`person-${id}`}
          passHref
        >
          <Link href="person/[id]" passHref as={`/person/${id}`}>
            <li className="c-people-list___item">{name}</li>
          </Link>
        </Link>
      ))}
    </ul>
  );
};

export { People };
