import React from "react";

import Task from "./Task";

function TaskList({ tasks, setTasks, axiosHeaders }) {
  return (
    <div className="taskListWrapper">
      {tasks.map(task => {
        return (
          <Task
            task={task}
            key={task._id}
            setTasks={setTasks}
            axiosHeaders={axiosHeaders}
          />
        );
      })}
    </div>
  );
}

export default TaskList;
