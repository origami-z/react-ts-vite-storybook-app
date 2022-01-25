import { Reducer } from "react"

export const initialState: ToDoItem[] = [{
  id: 1,
  text: "First todo",
  complete: false
}
  , {
  id: 2,
  text: "Two",
  complete: false
}
]

export interface ToDoItem {
  id: number;
  text: string;
  complete: boolean;
}

export enum ACTIONS {
  ADD_TODO = 'add_todo',
  TOGGLE_TODO = 'toggle_todo',
  DELETE_TODO = 'delete_todo'
}

export type Action =
  | { type: ACTIONS.ADD_TODO, payload: { name: ToDoItem['text'] } }
  | { type: ACTIONS.TOGGLE_TODO, payload: { id: ToDoItem['id'] } }
  | { type: ACTIONS.DELETE_TODO, payload: { id: ToDoItem['id'] } }

export const reducer: Reducer<ToDoItem[], Action> = (todos, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)]

    case ACTIONS.TOGGLE_TODO:
      return todos.map(todo => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete }
        }
        return todo
      })
    case ACTIONS.DELETE_TODO:
      return todos.filter(todo => todo.id !== action.payload.id)

    default:
      return todos
  }


}

function newTodo(name: string) {
  return { id: Date.now(), text: name, complete: false }
}