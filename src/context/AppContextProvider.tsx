import React, { useReducer } from "react";
import appReducer from "./app.reducer";
import { AppActionType, AppStateType } from "./constatns";

export const AppContext = React.createContext<AppStateType>({
  todoList: [],
  inProgressList: [],
  doneList: [],
  applyReducerAction: (action: AppActionType) => {},
});

const AppContextProvider: React.FC = (props) => {
  const initialState: AppStateType = {
    todoList: [],
    inProgressList: [],
    doneList: [],
    applyReducerAction: (action: AppActionType) => {},
  };

  const [state, dispatch] = useReducer(appReducer, initialState);

  const contextValue: AppStateType = {
    ...state,
    applyReducerAction: (action: AppActionType) => {
      dispatch(action);
    },
  };

  return (
    <AppContext.Provider value={contextValue}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
