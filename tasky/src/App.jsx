import './App.css';
import Task from './components/Task';

function App() {
  return (
    <div className="container">
      <h1>Tasky</h1>
      <Task title="Dishes" deadline="Today" description="Empty the dishwasher"/>
      <Task title="Laundry" deadline="Tomorrow" description="Fold the laundry" />
      <Task title="Tidy" deadline="Today" description="Pick up the rubbish" />
    </div>
  );
}

export default App;