import React from "react";
import { IPersonProps } from "./Person.interfaces";

const Person: React.FC<IPersonProps> = ({
  eye_color,
  gender,
  height,
  mass,
  name,
  skin_color,
}) => {
  return (
    <div className="c-person">
      <span>
        <strong>Name:</strong> {name}
      </span>
      {height ? (
        <span>
          <strong>Height:</strong> {height}
        </span>
      ) : null}
      {mass ? (
        <span>
          <strong>Mass:</strong> {mass}
        </span>
      ) : null}
      {eye_color ? (
        <span>
          <strong>Eye Color:</strong> {eye_color}
        </span>
      ) : null}
      {skin_color ? (
        <span>
          <strong>Skin Color:</strong> {skin_color}
        </span>
      ) : null}
      {gender ? (
        <span>
          <strong>Gender:</strong> {gender}
        </span>
      ) : null}
    </div>
  );
};

export { Person };
