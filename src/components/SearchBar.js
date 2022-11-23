//import React, { useState } from "react";

function SearchBar() {
  //const [search, setSearch] = useState();

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Buscar por marca o modelo"
          //value={search}
          className="form-control my-3"
        />
      </div>
    </>
  );
}

export default SearchBar;
