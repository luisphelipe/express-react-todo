import React, { useState, useEffect } from "react";
import axios from "axios";

import TaskList from "./TaskList";
import TaskForm from "./TaskForm";

function TodoList(props) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/tasks")
      .then(({ data }) => {
        setTasks(data);
      })
      .catch(errors => {
        console.log(errors);
      });
  }, []);

  return (
    <div>
      <TaskForm setTasks={setTasks} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default TodoList;
