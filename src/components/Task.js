import React from "react";
import axios from "axios";

import uncheckedBox from "./unchecked-box.png";
import checkedBox from "./checked-box.png";
import deleteButton from "./delete-button.png";

function Task({ task, setTasks }) {
  const checkBox = task.completed ? checkedBox : uncheckedBox;
  const completed = task.completed ? "taskCompleted" : "";
  const taskClasses = `taskContent ${completed}`;

  const handleCheckboxToggle = () => {
    axios
      .put(`http://localhost:3000/tasks/${task._id}`, {
        completed: !task.completed
      })
      .then(({ data }) => {
        setTasks(previousTasks => {
          const taskIndex = previousTasks.findIndex(t => t._id === task._id);

          const newTaskList = previousTasks.slice();
          newTaskList[taskIndex].completed = data.completed;

          return newTaskList;
        });
      })
      .catch(errors => {
        console.log(errors);
      });
  };

  const handleDelete = () => {
    axios
      .delete(`http://localhost:3000/tasks/${task._id}`)
      .then(({ data }) => {
        setTasks(previousTasks => {
          console.log(data);
          const taskIndex = previousTasks.findIndex(t => t._id === task._id);

          const newTaskList = previousTasks.slice();
          newTaskList.splice(taskIndex, 1);

          return newTaskList;
        });
      })
      .catch(errors => {
        console.log(errors);
      });
  };

  return (
    <div className="taskWrapper">
      <span className="taskCheckBox" onClick={handleCheckboxToggle}>
        <img src={checkBox} alt="checkbox" />
      </span>

      <span className={taskClasses}>{task.content}</span>

      <span className="taskDeleteButton" onClick={handleDelete}>
        <img src={deleteButton} alt="delete" />
      </span>
    </div>
  );
}

export default Task;
