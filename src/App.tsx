import './App.css';
import { TaskType, Todolist } from './Todolist';

function App() {

  let tasks: Array<TaskType> = [
    { id: 1, title: "css", isDone: true },
    { id: 2, title: "js", isDone: true },
    { id: 3, title: "react", isDone: false },
    { id: 4, title: "redux", isDone: false },
  ]

  function removeTask(id: number) {
    tasks = tasks.filter(t => t.id !== id )
    debugger
  }

  return (
    <div className="App">
      <Todolist title="What to learn" tasks={tasks} removeTask={removeTask}/>
    </div>
  );
}
export default App;
