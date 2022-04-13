import React, { useContext, useState } from "react";
import { BiX } from "react-icons/bi";
import { AppContext } from "../context/AppContextProvider";
import { ActionTypeName, AppActionType, Task } from "../context/constatns";
import Input from "./Input";

export interface ModalProps {
  header: string;
  closeAction: () => void;
  saveActionType: ActionTypeName;
  selectedTask?: Task;
}

const Modal: React.FC<ModalProps> = (props) => {
  const [header, setHeader] = useState(
    props.selectedTask ? props.selectedTask.header : ""
  );
  const [detail, setDetail] = useState(
    props.selectedTask ? props.selectedTask.detail : ""
  );
  const [showErrorMsg, setShowErrorMsg] = useState(false);

  const { applyReducerAction } = useContext(AppContext);

  const onSaveHandler = () => {
    if (header && detail) {
      const action: AppActionType = {
        type: props.saveActionType,
        payload: {
          id: props.selectedTask
            ? props.selectedTask.id
            : Date.now().toString(),
          header: header,
          detail: detail,
        },
      };

      applyReducerAction(action);
      props.closeAction();
    } else {
      setShowErrorMsg(true);
    }
  };

  return (
    <>
      <div
        className={`bg-slate-500 bg-opacity-75 overflow-y-auto overflow-x-hidden z-50 absolute top-0 left-0 w-full h-full flex justify-center align-middle `}
      >
        <div className="mx-auto my-auto p-4 w-full max-w-2xl">
          {/* Modal content  */}
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            {/* Modal header  */}
            <div className="flex justify-between items-start p-5 rounded-t border-b dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white">
                {props.header}
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={() => props.closeAction()}
              >
                <BiX className="w-5 h-5" />
              </button>
            </div>
            {/* Modal body  */}
            <div className="p-6 space-y-6">
              <Input
                name="Header"
                value={header}
                onChange={(e) => {
                  setHeader(e.target.value);
                  setShowErrorMsg(false);
                }}
              />

              <Input
                name="Details"
                value={detail}
                onChange={(e) => {
                  setDetail(e.target.value);
                  setShowErrorMsg(false);
                }}
              />

              {showErrorMsg && (
                <div
                  className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
                  role="alert"
                >
                  Header & Details shouldn't be empty.
                </div>
              )}
            </div>
            {/* Modal footer  */}
            <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
              <button
                onClick={() => {
                  onSaveHandler();
                }}
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Save
              </button>
              <button
                onClick={() => props.closeAction()}
                type="button"
                className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
