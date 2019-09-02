import React, { useState, useEffect } from "react";

import APIRequests from "../../requests/api.requests";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";

function TodoList({ authToken }) {
  const [tasks, setTasks] = useState([]);
  const [header, setHeader] = useState({});

  useEffect(() => {
    if (!authToken) return;
    const header = { Authorization: `Bearer ${authToken}` };
    setHeader(header);

    (async () => {
      try {
        const data = await APIRequests().getAllTasks(header);

        setTasks(data);
      } catch (errors) {
        console.log(errors);
      }
    })();
  }, [authToken]);

  return (
    <div id="todoWrapper">
      <TaskForm setTasks={setTasks} axiosHeaders={header} />
      <TaskList tasks={tasks} setTasks={setTasks} axiosHeaders={header} />
    </div>
  );
}

export default TodoList;
