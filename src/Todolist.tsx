import { FilterValuesType } from "./App"

export type TaskType = {
  id: number,
  title: string,
  isDone: boolean
}

type PropsType = {
  title: string
  tasks: Array<TaskType>
  removeTask: (id: number) => void
  chngeFilter: (value: FilterValuesType) => void
}

export function Todolist(props: PropsType) {
  return (
    <div>
      <h3>{props.title}</h3>
      <div>
        <input />
        <button>+</button>
      </div>
      <ul>
        {
          props.tasks.map(t => <li><input type="checkbox" checked={t.isDone} />
            <span>{t.title}</span>
            <button onClick={() => { props.removeTask(t.id) }}>x</button>
          </li>
          )
        }
      </ul>
      <div>
        <button onClick={() => { props.chngeFilter("all") }}>All</button>
        <button onClick={() => { props.chngeFilter("active") }}>Active</button>
        <button onClick={() => { props.chngeFilter("completed") }}>Completed</button>
      </div >
    </div >
  );
}