import React, { useContext } from "react";
import { BiTrash } from "react-icons/bi";
import EditTask from "../component/EditTask";
import { AppContext } from "../context/AppContextProvider";
import { ActionTypeName, AppActionType, Task } from "../context/constatns";

interface propType {
  className?: string;
  //   key: string;
  header: string;
  detail: string;
  editTaskAction: ActionTypeName;
  deleteTaskAction: ActionTypeName;
  currentTask: Task;
}

const Card: React.FC<propType> = (props) => {
  const { applyReducerAction } = useContext(AppContext);

  const deleteHandler = () => {
    const action: AppActionType = {
      type: props.deleteTaskAction,
      payload: props.currentTask,
    };
    applyReducerAction(action);
  };

  return (
    <div
      className={`p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 ${
        props.className && props.className
      }`}
    >
      <div className="flex flex-row justify-between">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          <pre>{props.header}</pre>
        </h5>

        <div>
          <EditTask
            editTaskAction={props.editTaskAction}
            selectedTask={props.currentTask}
          />

          <button type="button" className="" onClick={() => deleteHandler()}>
            <BiTrash className="w-6 h-6" onClick={() => deleteHandler()} />
          </button>
        </div>
      </div>

      <p className="font-normal text-gray-700 dark:text-gray-400">
        <pre>{props.detail}</pre>
      </p>
    </div>
  );
};

export default Card;
