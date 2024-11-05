import React from 'react';
import '../styles/TicketCard.css';

const TicketCard = ({ task }) => {
  return (
    <div className="ticket-card">
      <div className="card-header">
        <span className="task-id">{task.id}</span>
        {task.user && <img src={task.user.avatar} alt="User Avatar" className="user-avatar" />}
      </div>
      <h4 className="task-title">{task.title}</h4>
      <div className="card-footer">
        <span className={`priority ${task.priority.toLowerCase()}`}>{task.priority}</span>
        <span className="label">{task.label}</span>
      </div>
    </div>
  );
};

export default TicketCard;
