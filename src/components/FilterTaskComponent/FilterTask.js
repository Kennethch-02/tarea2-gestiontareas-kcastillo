// FilterTask.js
import React from 'react';

function FilterTask({ searchTerm, onSearchChange, completedFilter, onCompletedFilterChange }) {
  const searchContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  };

  const searchInputStyle = {
    flex: '1',
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginRight: '10px',
  };

  const filterSelectStyle = {
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  };

  return (
    <div style={searchContainerStyle}>
      <input
        type="text"
        placeholder="Search tasks..."
        value={searchTerm}
        onChange={onSearchChange}
        style={searchInputStyle}
      />
      <select
        value={completedFilter}
        onChange={onCompletedFilterChange}
        style={filterSelectStyle}
      >
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="incompleted">Incompleted</option>
      </select>
    </div>
  );
}

export default FilterTask;