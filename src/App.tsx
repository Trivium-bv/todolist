import './App.css';
import { TaskType, Todolist } from './Todolist';

function App() {

  let tasks1: Array<TaskType> = [
    { id: 1, title: "css", isDone: true },
    { id: 2, title: "js", isDone: true },
    { id: 3, title: "react", isDone: false },
  ]

  let tasks2: Array<TaskType> = [
    { id: 1, title: "Terminator", isDone: true },
    { id: 2, title: "Turtless", isDone: false },
    { id: 3, title: "XXX", isDone: true },
  ]

  let tasks3: Array<TaskType> = [
    { id: 1, title: "Dota2", isDone: true },
    { id: 2, title: "CS GO", isDone: false },
    { id: 3, title: "Half life", isDone: true },
  ]

  return (
    <div className="App">
      <Todolist title="What to learn" tasks={tasks1} />
      <Todolist title="Movies" tasks={tasks2} />
      <Todolist title="Games" tasks={tasks3} />
    </div>
  );
}
export default App;
