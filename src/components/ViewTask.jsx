import VerticalDots from "../assets/icon-vertical-ellipsis.svg";
import ChevronDown from "../assets/icon-chevron-down.svg";
import { useEffect, useState } from "react";

function ViewTask({ task, handleContent }) {
  const [showDropdown, setShowDropdown] = useState(false);

  const subtasksLength = task.subtasks.length;
  const subtasks = task.subtasks.reduce((acc, sub) => acc + sub.isCompleted, 0);

  const renderSubtasks = task.subtasks.map((subtask) => {
    return (
      <label
        className="flex items-center rounded gap-3 p-3 dark:bg-dark-bg bg-light-bg"
        key={subtask.title}
        htmlFor={subtask.title}
      >
        <input
          type="checkbox"
          id={subtask.title}
          name={subtask.title}
          defaultChecked={subtask.isCompleted}
          className="accent-purple dark:[&:not(:checked)]:opacity-10"
        />
        <h4
          className={
            subtask.isCompleted
              ? "line-through dark:no-underline"
              : "text-black dark:text-white"
          }
        >
          {subtask.title}
        </h4>
      </label>
    );
  });

  const renderDropdown = (
    <div className="bg-white absolute sm:right-[-80px] right-0  top-8 bg-white dark:bg-dark-gray dark:bg-dark-gray flex flex-col gap-3 rounded-md sm:w-40 p-4">
      <h4 onClick={() => handleContent("edit")} className="cursor-pointer">
        Edit Task
      </h4>
      <h4
        onClick={() => handleContent("delete")}
        className="text-red cursor-pointer"
      >
        DleteTask
      </h4>
    </div>
  );

  return (
    <div className="flex w-full flex-col gap-4 dark:text-white">
      <div className="flex items-center relative justify-between">
        <h2>{task.title}</h2>
        <img
          onClick={() => setShowDropdown(!showDropdown)}
          className="cursor-pointer"
          src={VerticalDots}
          alt="dots"
        />
        {showDropdown && renderDropdown}
      </div>
      <h4 className="font-medium">{task.description}</h4>
      <div className="flex flex-col gap-4">
        <h4 className="dark:text-white">
          Subtask({subtasks} of {subtasksLength})
        </h4>
        {renderSubtasks}
      </div>
      {task.status && (
        <div>
          <h4 className="dark:text-white my-2">Current Status</h4>

          <p className="p-2 border-[1px] rounded-md border-lines-dark items-center dark:border-lines-dark flex justify-between">
            {task.status}
            <img src={ChevronDown} alt="down-arrow" />
          </p>
        </div>
      )}
    </div>
  );
}

export default ViewTask;
