import { useState } from "react";
import Modal from "./Modal";
import ViewTask from "./ViewTask";

function ListTasks({ data }) {
  const [showModal, setShowModal] = useState(false);
  const [task, setTask] = useState("");

  const handleClick = (task) => {
    setShowModal(!showModal);
    setTask(task);
  };

  const onClose = () => setShowModal(false);

  const renderTasks = data.tasks.map((task) => {
    var subtasksLength = task.subtasks.length;
    var subtasks = task.subtasks.reduce((acc, sub) => acc + sub.isCompleted, 0);
    return (
      <div
        key={task.title}
        className="w-64 p-4 bg-white dark:bg-dark-gray rounded-md cursor-pointer shadow shadow-light-lines dark:shadow-dark-gray"
        onClick={() => handleClick(task)}
      >
        <h5 className="dark:text-white">{task.title}</h5>
        <h4 className="text-[10px] mt-1">{`${subtasks} of ${subtasksLength} subtasks`}</h4>
      </div>
    );
  });

  return (
    <div className="flex flex-col gap-4">
      {data.tasks.length ? (
        <h4>
          {data.name.toUpperCase()} {`(${data.tasks.length})`}
        </h4>
      ) : null}
      {renderTasks}
      {showModal && (
        <Modal onClose={onClose} className="items-center">
          <ViewTask task={task} />
        </Modal>
      )}
    </div>
  );
}

export default ListTasks;
