import './App.css';
import Task from './components/Task';
import React, { useState } from 'react';

function App() {

  const [ taskState, setTaskState ] = useState({
    tasks: [
      { id: 1, title:"Dishes", description: "Empty dishwasher", deadline: "Today", level: "Low", done: false },
      { id: 2, title: "Laundry", description: "Fold clothes and put away", deadline: "Tomorrow", level: "Medium", done: false },
      { id: 3, title: "Tidy up", deadline: "Today", level: "High", done: false}
    ]
  });

    const doneHandler = (taskIndex) => {
    const tasks = [...taskState.tasks];
    tasks[taskIndex].done = !tasks[taskIndex].done;
    setTaskState({tasks});
    console.log(`${taskIndex} ${tasks[taskIndex].done}`);
  }

  return (
    <div className="container">
      <h1>Tasky</h1>
      {taskState.tasks.map((task, index) => (
        <Task
          title={task.title}
          description={task.description}
          deadline={task.deadline}
          level={task.level}
          key={task.id}
          done={task.done}
          markDone={() => doneHandler(index)}
        />
      ))}
    </div>
  );
}

export default App;