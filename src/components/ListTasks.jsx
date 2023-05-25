import { useState } from "react";
import Modal from "./Modal";
import ViewTask from "./ViewTask";
import useModal from "../hooks/useModal";
import EditTask from "./EditTask";

function ListTasks({ data }) {
  const [showModal, toggleModal, closeModal] = useModal();
  const [task, setTask] = useState(null);
  const [content, setContent] = useState(null);

  const handleClick = (task) => {
    toggleModal();
    setTask(task);
  };

  const handleContent = (value) => setContent(value);

  const renderTasks = data.tasks.map((task) => {
    const subtasksLength = task.subtasks.length;
    const subtasks = task.subtasks.reduce(
      (acc, sub) => acc + sub.isCompleted,
      0
    );
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

  let contentToShow;
  if (content === "edit") contentToShow = <EditTask task={task} />;
  else if (content === "delete")
    contentToShow = (
      <div className="flex w-90 h-90 flex-col gap-4 dark:text-white">
        DelteTask
      </div>
    );
  else contentToShow = <ViewTask handleContent={handleContent} task={task} />;

  return (
    <article className="flex flex-col gap-4">
      {data.tasks.length ? (
        <h4>
          {data.name.toUpperCase()} {`(${data.tasks.length})`}
        </h4>
      ) : null}
      {renderTasks}
      {showModal && (
        <Modal
          onClose={closeModal}
          handleContent={handleContent}
          className="items-center"
        >
          {contentToShow}
        </Modal>
      )}
    </article>
  );
}

export default ListTasks;
