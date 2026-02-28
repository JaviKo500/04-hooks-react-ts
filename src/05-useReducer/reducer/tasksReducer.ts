import * as z from 'zod/v4';
export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TaskState {
  todos: Todo[];
  length: number;
  completed: number;
  pending: number;
}

export type TaskAction = 
| { type: 'ADD_TODO', payload: string }
| { type: 'TOGGLE_TODO', payload: number}
| { type: 'DELETE_TODO', payload: number};

const TodoSchema = z.object({
  id: z.number(),
  text: z.string(),
  completed: z.boolean(),
});

const TaskStateSchema = z.object({
  todos: z.array( TodoSchema),
  length: z.number(),
  completed: z.number(),
  pending: z.number(),
});

export const getTaskInitialState = (): TaskState => {
  const storedState = localStorage.getItem('tasks-state');
  if ( !storedState ) return {
    todos: [],
    length: 0,
    completed: 0,
    pending: 0,
  };

  const result = TaskStateSchema.safeParse( JSON.parse(storedState) );

  if ( result.error ) {
    console.log('<--------------- JK TasksReducer --------------->');
    console.log(result.error);
    return {
      todos: [],
      length: 0,
      completed: 0,
      pending: 0,
    };
  }
  return result.data;
};
export const tasksReducer = ( state: TaskState, action: TaskAction ): TaskState => {
  const { type, payload } = action;
  switch (type) {
    case 'ADD_TODO': { 
      if ( !payload.trim().length ) return state;
      const newTodo: Todo = {
        id: Date.now(),
        text: payload,
        completed: false
      };
      const todos = [ newTodo, ...state.todos ];
      return {
        ...state,
        todos,
        length: todos.length,
        pending: state.pending + 1,
      }; 
    }
    case 'TOGGLE_TODO':{
      const updatedTodos = state.todos.map( todo => {
        if ( todo.id === payload ) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
      const pending = updatedTodos.filter( todo => !todo.completed ).length;
      return {
        ...state,
        todos: updatedTodos,
        pending,
        completed: updatedTodos.length - pending,
      };
    }
    case 'DELETE_TODO':{
      const filteredTodos = state.todos.filter( todo => todo.id !== payload );
      const pending = filteredTodos.filter( todo => !todo.completed ).length;
      return {
        ...state,
        todos: filteredTodos,
        length: filteredTodos.length,
        pending,
        completed: filteredTodos.length - pending,
      };
    }
    default:
      return state;
  }
}