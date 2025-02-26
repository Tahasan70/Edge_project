import React, { useState } from 'react';
import TaskCard from './components/TaskCard';
import './App.css';

const App = () => {
  //const [tasks, setTasks] = useState([]);
  const [tasks, setTasks] = useState([
    { taskName: 'Finish Project', category: 'Work', priority: 'High', dueDate: '2024-12-31' },
    { taskName: 'Buy Groceries', category: 'Personal', priority: 'Medium', dueDate: '2024-12-25' },
    { taskName: 'Workout', category: 'Fitness', priority: 'Low', dueDate: '2024-12-22' },
    { taskName: 'Exercise', category: 'Health', priority: 'Low', dueDate: '2024-12-22' },
    { taskName: 'Complete React Tutorial', category: 'Learning', priority: 'High', dueDate: '2024-12-30' },
    { taskName: 'Prepare Presentation', category: 'Work', priority: 'Medium', dueDate: '2024-12-27' },
    { taskName: 'Doctor Appointment', category: 'Health', priority: 'High', dueDate: '2024-12-23' },
    { taskName: 'Call Parents', category: 'Personal', priority: 'Low', dueDate: '2024-12-22' },
    { taskName: 'Plan New Year Party', category: 'Social', priority: 'Medium', dueDate: '2024-12-31' },
    { taskName: 'Submit Tax Forms', category: 'Finance', priority: 'High', dueDate: '2024-12-28' },
    { taskName: 'Weekly Groceries', category: 'Household', priority: 'Medium', dueDate: '2024-12-26' },
    { taskName: 'Read a Book', category: 'Leisure', priority: 'Low', dueDate: '2024-12-29' },
    { taskName: 'Fix Bug in Codebase', category: 'Work', priority: 'High', dueDate: '2024-12-25' },
    { taskName: 'Clean the Garage', category: 'Household', priority: 'Low', dueDate: '2024-12-24' },
  ]);

  
  return (
    <div className="app">
      <h1>Task Management System</h1>
      {tasks.length === 0 ? (
        <p className="no-tasks-message">No tasks to display. Please add a new task!</p>
      ) : (
        <div className="task-grid">
          {tasks.map((task, index) => (
            <TaskCard
              key={index}
              taskName={task.taskName}
              category={task.category}
              priority={task.priority}
              dueDate={task.dueDate}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
