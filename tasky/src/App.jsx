import './App.css';
import Task from './components/Task';
import React, { useState } from 'react';

function App() {

  const [ taskState, setTaskState ] = useState({
    tasks: [
      { id: 1, title:"Dishes", description: "Empty dishwasher", deadline: "Today", level: "Low" },
      { id: 2, title: "Laundry", description: "Fold clothes and put away", deadline: "Tomorrow", level: "Medium" },
      { id: 3, title: "Tidy up", deadline: "Today", level: "High"}
    ]
  });

  return (
    <div className="container">
      <h1>Tasky</h1>
      {taskState.tasks.map((task) => (
        <Task
          title={task.title}
          description={task.description}
          deadline={task.deadline}
          level={task.level}
          key={task.id}
        />
      ))}
    </div>
  );
}

export default App;