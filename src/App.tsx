import { useState } from 'react';
import './App.css';
import { TaskType, Todolist } from './Todolist';

export type FilterValuesType = "all" | "completed" | "active"

function App() {

  let [tasks, setTasks] = useState<Array<TaskType>>([
    { id: 1, title: "css", isDone: true },
    { id: 2, title: "js", isDone: true },
    { id: 3, title: "react", isDone: false },
    { id: 4, title: "redux", isDone: false }])

  let [filter, setFilter] = useState<FilterValuesType>("all")

  function removeTask(id: number) {
    let filteredTasks = tasks.filter(t => t.id !== id)
    setTasks(filteredTasks)
  }

  function chngeFilter(value: FilterValuesType) {
    setFilter(value)
  }

  let tasksForTodolist = tasks
  if (filter === "completed") {
    tasksForTodolist = tasks.filter(t => t.isDone === true)
  }
  if (filter === "active") {
    tasksForTodolist = tasks.filter(t => t.isDone === false)
  }

  return (
    <div className="App">
      <Todolist title="What to learn"
        tasks={tasksForTodolist}
        removeTask={removeTask}
        chngeFilter={chngeFilter}
      />
    </div>
  );
}
export default App;
