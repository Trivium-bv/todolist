import { useState } from 'react';
import './App.css';
import { TaskType, Todolist } from './Todolist';

function App() {

  let initialTasks: Array<TaskType> = [
    { id: 1, title: "css", isDone: true },
    { id: 2, title: "js", isDone: true },
    { id: 3, title: "react", isDone: false },
    { id: 4, title: "redux", isDone: false },
  ]

  let [tasks, setTasks] =useState(initialTasks)

  function removeTask(id: number) {
    let filteredTasks = tasks.filter(t => t.id !== id )
    setTasks(filteredTasks)
  }

  return (
    <div className="App">
      <Todolist title="What to learn" tasks={tasks} removeTask={removeTask}/>
    </div>
  );
}
export default App;
