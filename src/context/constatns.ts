export interface Task {
  id: string;
  header: string;
  detail: string;
}

export interface AppStateType {
  todoList: Task[];
  inProgressList: Task[];
  doneList: Task[];
  applyReducerAction: (action: AppActionType) => void;
}

export interface AppActionType {
  type: ActionTypeName;
  payload: Task;
}

export enum ActionTypeName {
  ADD_NEW_TODO,
  REMOVE_TODO,
  EDIT_TODO,

  ADD_NEW_IN_PROGRESS,
  REMOVE_IN_PROGRESS,
  EDIT_IN_PROGRESS,

  ADD_NEW_DONE,
  REMOVE_DONE,
  EDIT_DONE,
}
