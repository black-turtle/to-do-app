import { ActionTypeName, AppActionType, AppStateType } from "./constatns";
const appReducer = (state: AppStateType, action: AppActionType) => {
  const { type, payload } = action;

  let newList = [];

  switch (type) {
    // To do actions
    case ActionTypeName.ADD_NEW_TODO:
      newList = [...state.todoList];
      newList.push(payload);
      return { ...state, todoList: newList };

    case ActionTypeName.REMOVE_TODO:
      newList = [...state.todoList];
      newList = newList.filter((task) => task.id !== payload.id);
      return { ...state, todoList: newList };

    case ActionTypeName.EDIT_TODO:
      newList = state.todoList.map((task) => {
        if (task.id === payload.id) {
          return payload;
        }
        return task;
      });
      return { ...state, todoList: newList };

    // In progress actions
    case ActionTypeName.ADD_NEW_IN_PROGRESS:
      newList = [...state.inProgressList];
      newList.push(payload);
      return { ...state, inProgressList: newList };

    case ActionTypeName.REMOVE_IN_PROGRESS:
      newList = [...state.inProgressList];
      newList = newList.filter((task) => task.id !== payload.id);
      return { ...state, inProgressList: newList };

    case ActionTypeName.EDIT_IN_PROGRESS:
      newList = state.inProgressList.map((task) => {
        if (task.id === payload.id) {
          return payload;
        }
        return task;
      });
      return { ...state, inProgressList: newList };

    // Done Acctions
    case ActionTypeName.ADD_NEW_DONE:
      newList = [...state.doneList];
      newList.push(payload);
      return { ...state, doneList: newList };

    case ActionTypeName.REMOVE_DONE:
      newList = [...state.doneList];
      newList = newList.filter((task) => task.id !== payload.id);
      return { ...state, doneList: newList };

    case ActionTypeName.EDIT_DONE:
      newList = state.doneList.map((task) => {
        if (task.id === payload.id) {
          return payload;
        }
        return task;
      });
      return { ...state, doneList: newList };

    default:
      return state;
  }
};

export default appReducer;
