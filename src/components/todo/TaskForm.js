import React, { useState } from "react";

import APIRequests from "../../requests/api.requests";

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

  const handleSubmit = async () => {
    try {
      const newTask = await APIRequests().createTask(axiosHeaders, taskContent);

      setTasks(previousTasks => {
        return [...previousTasks, newTask];
      });

      setTaskContent("");
    } catch (errors) {
      console.log(errors);
    }
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
          <img src="./create-button.png" alt="Create" />
        </span>
      </div>
    </div>
  );
}

export default TaskForm;
