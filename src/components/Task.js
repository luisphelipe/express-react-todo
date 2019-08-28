import React from "react";
import axios from "axios";

function Task(props) {
  const completedLabel = props.task.completed ? "Done" : "To do";

  const handleDelete = () => {
    axios
      .delete(`http://localhost:3000/tasks/${props.id}`)
      .then(({ data }) => {
        props.setTasks(previousTasks => {
          console.log(data);
          const taskIndex = previousTasks.findIndex(
            task => task._id === props.id
          );

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
    <div>
      <p>{`${props.task.title}, ${props.task.content}, ${completedLabel}`}</p>
      <button>PUT</button>
      <button onClick={handleDelete}>DEL</button>
    </div>
  );
}

export default Task;
