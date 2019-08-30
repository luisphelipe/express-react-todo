import React, { useState } from "react";
import axios from "axios";

import createButton from "./create-button.png";

function TaskForm({ setTasks, axiosHeaders }) {
  const [taskContent, setTaskContent] = useState("");

  const handleContentChange = event => {
    setTaskContent(event.target.value);
  };

  const handleKeyDown = e => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    axios
      .post(
        "http://localhost:3000/tasks",
        {
          content: taskContent
        },
        { headers: axiosHeaders }
      )
      .then(({ data: newTask }) => {
        setTasks(previousTasks => {
          return [...previousTasks, newTask];
        });
      })
      .catch(errors => {
        console.log(errors);
      })
      .finally(() => {
        setTaskContent("");
      });
  };

  return (
    <div id="taskFormWrapper">
      <div>
        <input
          type="text"
          name="taskContent"
          onChange={handleContentChange}
          onKeyDown={handleKeyDown}
          value={taskContent}
          placeholder="Add task"
        />

        <span type="submit" onClick={handleSubmit}>
          <img src={createButton} alt="Create" />
        </span>
      </div>
    </div>
  );
}

export default TaskForm;
