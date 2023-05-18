import React from "react";

function ListTasks({ data }) {
  const renderTasks = data.tasks.map((task) => {
    const subtasksLength = task.subtasks.length;
    const subtasks = task.subtasks.reduce(
      (acc, sub) => acc + sub.isCompleted,
      0
    );
    return (
      <div
        key={task.title}
        className="lg:w-60  p-4 bg-white rounded-md cursor-pointer shadow-lg shadow-slate-200"
      >
        <h5>{task.title}</h5>
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
    </div>
  );
}

export default ListTasks;
