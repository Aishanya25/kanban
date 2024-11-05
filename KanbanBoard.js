import React, { useState } from 'react';
import TicketCard from './TicketCard.js';
import DisplayOptions from './DisplayOptions.js';
import SortOptions from './SortOptions.js';
import '../styles/KanbanBoard.css';

const KanbanBoard = ({ tasks }) => {
  const [grouping, setGrouping] = useState('status'); // Default: group by status
  const [ordering, setOrdering] = useState('priority'); // Default: sort by priority

  const handleGroupingChange = (newGrouping) => {
    setGrouping(newGrouping);
  };

  const handleOrderingChange = (newOrdering) => {
    setOrdering(newOrdering);
  };

  // Helper functions for grouping and sorting tasks
  const groupTasks = (tasks) => {
    // Logic to group tasks based on the selected grouping
  };

  const sortTasks = (tasks) => {
    // Logic to sort tasks based on the selected ordering
  };

  return (
    <div className="kanban-board">
      <div className="options">
        <DisplayOptions selected={grouping} onChange={handleGroupingChange} />
        <SortOptions selected={ordering} onChange={handleOrderingChange} />
      </div>
      {/* Render columns based on grouping */}
      {groupTasks(tasks).map((column, index) => (
        <div key={index} className="column">
          <h3 className="column-title">{column.title}</h3>
          {sortTasks(column.tasks).map((task) => (
            <TicketCard key={task.id} task={task} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default KanbanBoard;
