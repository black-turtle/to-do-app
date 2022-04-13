import React, { ChangeEventHandler } from "react";

export interface InputProps {
  name: string;
  value: string;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
}

const Input: React.FC<InputProps> = (props) => {
  return (
    <>
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
        {props.name}
      </label>
      <textarea
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="type something..."
        value={props.value}
        onChange={props.onChange}
      ></textarea>
    </>
  );
};

export default Input;
