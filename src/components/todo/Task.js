import React from "react";

import APIRequests from "../../requests/api.requests";

function Task({ task, setTasks, axiosHeaders }) {
  const checkBox = task.completed ? "./checked-box.png" : "./unchecked-box.png";
  const completed = task.completed ? "taskCompleted" : "";
  const taskClasses = `taskContent ${completed}`;

  const handleCheckboxToggle = async () => {
    try {
      const data = await APIRequests().toggleTaskStatus(axiosHeaders, task);
      console.log(data);

      setTasks(previousTasks => {
        const taskIndex = previousTasks.findIndex(t => t._id === task._id),
          newTaskList = previousTasks.slice();

        newTaskList[taskIndex].completed = data.completed;
        return newTaskList;
      });
    } catch (errors) {
      console.log(errors);
    }
  };

  const handleDelete = async () => {
    try {
      const data = await APIRequests().deleteTask(axiosHeaders, task);

      setTasks(previousTasks => {
        console.log(data);
        const taskIndex = previousTasks.findIndex(t => t._id === task._id),
          newTaskList = previousTasks.slice();

        newTaskList.splice(taskIndex, 1);

        return newTaskList;
      });
    } catch (errors) {
      console.log(errors);
    }
  };

  return (
    <div className="taskWrapper">
      <span className="taskCheckBox" onClick={handleCheckboxToggle}>
        <img src={checkBox} alt="checkbox" />
      </span>

      <span className={taskClasses}>{task.content}</span>

      <span className="taskDeleteButton" onClick={handleDelete}>
        <img src="./delete-button.png" alt="delete" />
      </span>
    </div>
  );
}

export default Task;
