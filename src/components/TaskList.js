import React from "react";

import Task from "./Task";

function TaskList(props) {
  return (
    <div>
      {props.tasks.map(task => {
        return (
          <Task
            task={task}
            key={task._id}
            id={task._id}
            setTasks={props.setTasks}
          />
        );
      })}
    </div>
  );
}

export default TaskList;
