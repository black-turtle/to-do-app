import React, { useContext } from "react";
import Card from "../commonUI/Card";
import Center from "../commonUI/Center";
import List from "../commonUI/List";
import { AppContext } from "../context/AppContextProvider";
import { ActionTypeName } from "../context/constatns";

export interface TodoPageProps {}

const TodoPage: React.FC<TodoPageProps> = (props) => {
  const { todoList } = useContext(AppContext);
  const { inProgressList } = useContext(AppContext);
  const { doneList } = useContext(AppContext);
  return (
    <>
      <Center className="m-5">
        <List header="To Do" newTaskAction={ActionTypeName.ADD_NEW_TODO}>
          {todoList.map((task) => (
            <Card
              className="mb-3"
              key={task.id}
              header={task.header}
              detail={task.detail}
              editTaskAction={ActionTypeName.EDIT_TODO}
              deleteTaskAction={ActionTypeName.REMOVE_TODO}
              currentTask={task}
            />
          ))}
        </List>

        <List
          header="In Progress"
          newTaskAction={ActionTypeName.ADD_NEW_IN_PROGRESS}
        >
          {inProgressList.map((task) => (
            <Card
              className="mb-3"
              key={task.id}
              header={task.header}
              detail={task.detail}
              editTaskAction={ActionTypeName.EDIT_IN_PROGRESS}
              deleteTaskAction={ActionTypeName.REMOVE_IN_PROGRESS}
              currentTask={task}
            />
          ))}
        </List>

        <List header="Done" newTaskAction={ActionTypeName.ADD_NEW_DONE}>
          {doneList.map((task) => (
            <Card
              className="mb-3"
              key={task.id}
              header={task.header}
              detail={task.detail}
              editTaskAction={ActionTypeName.EDIT_DONE}
              deleteTaskAction={ActionTypeName.REMOVE_DONE}
              currentTask={task}
            />
          ))}
        </List>
      </Center>
    </>
  );
};

export default TodoPage;
