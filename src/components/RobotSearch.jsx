import React from "react";

const RobotSearch = ({search, setSearch}) => {
    return (
    <label className="search">
    Search:
    <input
      type="text"
      value={search}
      onChange={(event) => setSearch(event.target.value)}
    />
  </label>
  )
}

export default RobotSearch;