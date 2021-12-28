import React, { useState, useEffect, useMemo, ChangeEvent } from "react";
import "./App.css";
import AppHeader from "./components/AppHeader";
import BreedsList from "./components/BreedsList";
import { Breeds } from "./types";
import fetchAllBreeds from "./services/fetchAllBreeds";
import RenderImages from "./components/RenderImages";
import sortFn from "./sort";

function App() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [breeds, setBreeds] = useState<Breeds>({});
  const [selectedBreed, setSelectedBreed] = useState<string>("");

  const handleInputChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(value);
    setSelectedBreed("");
  };

  const handleSelection = (breed: string): void => {
    setSelectedBreed(breed);
  };

  useEffect(() => {
    fetchAllBreeds().then(({ message }) => setBreeds(message));
  }, []);

  const sortedRecords = useMemo<string[]>(
    () => Object.keys(breeds).sort(sortFn),
    [breeds]
  );

  const filteredSortedRecords = useMemo<string[]>(
    () =>
      sortedRecords.filter((value) => value.includes(searchTerm)).slice(0, 12),
    [sortedRecords, searchTerm]
  );

  return (
    <div className="App">
      <AppHeader
        searchTerm={searchTerm}
        handleInputChange={handleInputChange}
      />
      <BreedsList
        data={filteredSortedRecords}
        selected={selectedBreed}
        handleSelection={handleSelection}
      />
      <RenderImages selectedBreed={selectedBreed} />
    </div>
  );
}

export default App;
