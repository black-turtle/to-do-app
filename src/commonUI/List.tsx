import NewTask from "../component/NewTask";
import { ActionTypeName } from "../context/constatns";

interface propTypes {
  className?: string;
  header: string;
  newTaskAction: ActionTypeName;
}

const List: React.FC<propTypes> = (props) => {
  return (
    <div className={`m-2 w-1/3 ${props.className && props.className}`}>
      <div className="flex flex-row justify-between mb-2  bg-purple-400 rounded-md font-bold tracking-tight text-gray-900 dark:text-white ">
        <h2 className={`m-2 text-2xl text-center`}>{props.header}</h2>
        <NewTask newTaskAction={props.newTaskAction} />
      </div>

      {/* <button
        type="button"
        className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Add
      </button> */}

      {props.children}
    </div>
  );
};

export default List;
