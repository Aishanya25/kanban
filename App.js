// src/App.js
import React from 'react';
import KanbanBoard from './components/KanbanBoard.js';
import './styles/App.css';

const tasks = [
  { id: 'CAM-1', title: 'Update UI', priority: 'Low', status: 'To Do', user: 'Alice', label: 'Feature' },
  { id: 'CAM-2', title: 'Fix Bug', priority: 'High', status: 'In Progress', user: 'Bob', label: 'Bug' },
  { id: 'CAM-3', title: 'Write Documentation', priority: 'Medium', status: 'Done', user: 'Charlie', label: 'Documentation' },
  // Add additional sample tasks here
];

const App = () => {
  return (
    <div className="App">
      <h1>Kanban Board</h1>
      <KanbanBoard tasks={tasks} />
    </div>
  );
};

export default App;
