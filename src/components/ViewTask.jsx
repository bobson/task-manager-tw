import VerticalDots from "../assets/icon-vertical-ellipsis.svg";
import ChevronDown from "../assets/icon-chevron-down.svg";

function ViewTask({ task }) {
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

  return (
    <div className="flex w-full flex-col gap-4 dark:text-white">
      <div className="flex items-center justify-between">
        <h2>{task.title}</h2>
        <img className="cursor-pointer" src={VerticalDots} alt="dots" />
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
