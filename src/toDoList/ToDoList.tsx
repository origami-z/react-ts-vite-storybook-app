import { HTMLAttributes, useReducer } from "react";
import { ACTIONS, initialState, reducer, ToDoItem } from "./reducer";

export function Task({
  task: { id, text, complete },
  onArchiveTask,
}: {
  task: ToDoItem;
  onArchiveTask: (id: number) => void;
}) {
  return (
    //   ${state}
    <div className={`list-item`}>
      <label className="checkbox">
        <input type="checkbox" defaultChecked={complete} name={`Task ${id}`} />
        <span
          className="checkbox-custom"
          onClick={() => onArchiveTask(id)}
          id={`archiveTask-${id}`}
        >
          {text}
        </span>
      </label>
    </div>
  );
}

export const ToDoList = (props: HTMLAttributes<HTMLDivElement>) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div {...props}>
      {state.map((todo, index) => (
        <Task
          key={`todo-${index}`}
          task={todo}
          onArchiveTask={() =>
            dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })
          }
        />
      ))}
    </div>
  );
};
