import { useState } from "react";
import ChevronDown from "../assets/icon-chevron-down.svg";
import IconCross from "../assets/icon-cross.svg";
import Button from "./Button";

function EditTask({ task }) {
  const [title, setTItle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [subtasks, setSubtasks] = useState(
    task.subtasks.map((subtask) => subtask)
  );

  const handleSutbasksChange = (e, idx) => {
    let newArr = subtasks.map((item, i) => {
      if (idx === i) {
        return { ...item, title: e.target.value };
      } else return item;
    });
    setSubtasks(newArr);
  };

  const handleSubmit = (e) => e.prevetDefault();

  const renderSubtasks = subtasks.map((subtask, idx) => {
    return (
      <div key={idx} className="flex w-full items-center">
        <input
          className="dark:bg-dark-gray dark:border-lines-dark flex-1 border-2 border-lines-light my-1 rounded p-2"
          onChange={(e) => handleSutbasksChange(e, idx)}
          key={idx}
          value={subtasks[idx].title}
        />
        <img src={IconCross} className="cursor-pointer ml-3" alt="cross" />
      </div>
    );
  });
  return (
    <div className="flex max-h-[calc(100vh-300px)] overflow-y-auto flex-col gap-4 dark:text-white">
      <form className="flex flex-col gap-4">
        <h2>Edit Task</h2>
        <div className="flex flex-col text-xs">
          <label className="text-medium-gray dark:text-white">Title</label>
          <input
            className="dark:bg-dark-gray dark:border-lines-dark border-2 border-lines-light rounded p-2"
            onChange={(e) => setTItle(e.target.value)}
            type="textarea"
            value={title}
          />
        </div>

        <div className="flex flex-col text-xs">
          <label className="text-medium-gray dark:text-white">
            Description
          </label>
          <textarea
            rows="4"
            className="dark:bg-dark-gray dark:border-lines-dark border-2 border-lines-light rounded p-2"
            onChange={(e) => setDescription(e.target.value)}
            type="textarea"
            value={description}
            placeholder="e.g. It is always good to take a break. This 15 minute break will recharge the batteries a little."
          />
        </div>

        <div className="flex flex-col text-xs">
          <label className="text-medium-gray dark:text-white">Subtasks</label>
          {renderSubtasks}
        </div>
        <Button type="button" secondary>
          +Add New Subtask
        </Button>
        {task.status && (
          <div>
            <h4 className="dark:text-white my-2">Status</h4>

            <p className="p-2 border-[1px] rounded-md border-lines-dark items-center dark:border-lines-dark flex justify-between">
              {task.status}
              <img src={ChevronDown} alt="down-arrow" />
            </p>
          </div>
        )}
      </form>
      <Button primary small>
        Save Changes
      </Button>
    </div>
  );
}

export default EditTask;
