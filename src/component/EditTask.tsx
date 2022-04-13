import React, { useState } from "react";
import { BiEdit } from "react-icons/bi";
import Modal from "../commonUI/Modal";
import { ActionTypeName, Task } from "../context/constatns";

export interface EditTaskProps {
  editTaskAction: ActionTypeName;
  selectedTask: Task;
}

const EditTask: React.FC<EditTaskProps> = (props) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setShowModal(true)}>
        <BiEdit className="w-6 h-6" />
      </button>

      {showModal && (
        <Modal
          header="Edit task"
          closeAction={() => setShowModal(false)}
          saveActionType={props.editTaskAction}
          selectedTask={props.selectedTask}
        />
      )}
    </>
  );
};

export default EditTask;
