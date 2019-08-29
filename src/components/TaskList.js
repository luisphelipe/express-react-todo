import React from "react";

import Task from "./Task";

function TaskList(props) {
  return (
    <div className="taskListWrapper">
      {props.tasks.map(task => {
        return <Task task={task} key={task._id} setTasks={props.setTasks} />;
      })}
    </div>
  );
}

export default TaskList;
