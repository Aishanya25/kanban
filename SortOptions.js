import React from 'react';
import '../styles/SortOptions.css';

const SortOptions = ({ selected, onChange }) => {
  return (
    <div className="sort-options">
      <label>Sort by:</label>
      <select value={selected} onChange={(e) => onChange(e.target.value)}>
        <option value="priority">Priority</option>
        <option value="title">Title</option>
      </select>
    </div>
  );
};

export default SortOptions;
