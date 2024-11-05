import React from 'react';
import '../styles/DisplayOptions.css';

const DisplayOptions = ({ selected, onChange }) => {
  return (
    <div className="display-options">
      <label>Group by:</label>
      <select value={selected} onChange={(e) => onChange(e.target.value)}>
        <option value="status">Status</option>
        <option value="user">User</option>
        <option value="priority">Priority</option>
      </select>
    </div>
  );
};

export default DisplayOptions;
