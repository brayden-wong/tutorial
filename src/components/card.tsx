import { ChangeEvent } from "react";

type CardProps = {
  name: string;
  age: number;
  searchValue: string;
  setSearchValue: (name: string) => void;
};

export const Card = ({ name, age, searchValue, setSearchValue }: CardProps) => {
  return (
    <div className="flex h-1/4 w-1/2 flex-col items-center justify-center rounded-md bg-red-500">
      <p>{name}</p>
      <p>{age}</p>
    </div>
  );
};
