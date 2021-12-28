import React, { ReactNode, createContext, useContext } from "react";
import { IPersonProps } from "../components";
import { people } from "../data/People";

type peopleContextType = {
  people: IPersonProps[];
};

const peopleContextDefaultValue: peopleContextType = {
  people: [],
};

const PeopleContext = createContext<peopleContextType>(
  peopleContextDefaultValue
);

export const usePeople = () => {
  return useContext(PeopleContext);
};

type PeopleProviderProps = {
  children: ReactNode;
};

export const PeopleProvider = ({ children }: PeopleProviderProps) => {
  return (
    <PeopleContext.Provider value={{ people }}>
      {children}
    </PeopleContext.Provider>
  );
};
