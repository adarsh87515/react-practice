import React from "react";

const Search = ({ search, setSearch, handleSearch }) => {
  return (
    <div className="search-engine">
      <input
        type="text"
        placeholder="Enter City Name"
        name="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <button className="search-btn" onClick={handleSearch}>
        Search weather
      </button>
    </div>
  );
};

export default Search;
