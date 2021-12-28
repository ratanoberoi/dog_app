import React from "react";

interface BreedsListprops {
  data: string[];
  selected: string;
  handleSelection: Function;
}

const BreedsList = ({ data, selected, handleSelection }: BreedsListprops) => {
  if (data.length === 0) {
    return <strong>No breed matches found.</strong>;
  }

  return (
    <div className="breeds-container">
      {data.map((breed) => (
        <div
          className={`breeds-list-item ${selected === breed ? "active" : ""}`}
          onClick={() => handleSelection(breed)}
          key={breed}
        >
          {breed}
        </div>
      ))}
    </div>
  );
};

export default BreedsList;
