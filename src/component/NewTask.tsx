import React, { useState } from "react";
import { BiPlus } from "react-icons/bi";
import Modal from "../commonUI/Modal";
import { ActionTypeName } from "../context/constatns";

export interface NewTaskProps {
  newTaskAction: ActionTypeName;
}

const NewTask: React.FC<NewTaskProps> = (props) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        type="button"
        className={`w-12 h-12 dark:text-white`}
        onClick={() => setShowModal(true)}
      >
        <BiPlus className="w-6 h-6" />
      </button>

      {showModal && (
        <Modal
          header="Add new task"
          closeAction={() => setShowModal(false)}
          saveActionType={props.newTaskAction}
        />
      )}
    </>
  );
};

export default NewTask;
