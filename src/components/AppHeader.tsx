import React, { ChangeEventHandler } from "react";

interface AppHeaderProps {
  searchTerm: string;
  handleInputChange: ChangeEventHandler;
}

const AppHeader = ({ searchTerm, handleInputChange }: AppHeaderProps) => (
  <div className="header-container">
    <h1>Dogs!</h1>
    <input
      placeholder="Search"
      value={searchTerm}
      onChange={handleInputChange}
    />
  </div>
);

export default AppHeader;
