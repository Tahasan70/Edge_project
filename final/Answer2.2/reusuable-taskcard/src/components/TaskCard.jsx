import React from 'react';
import './TaskCard.css'; // Optional: Add styling for the component

const TaskCard = ({ taskName, category, priority, dueDate }) => {
  return (
    <div className="task-card">
      <h3>{taskName}</h3>
      <p>Category: {category}</p>
      <p>Priority: {priority}</p>
      <p>Due Date: {dueDate}</p>
    </div>
  );
};

export default TaskCard;
