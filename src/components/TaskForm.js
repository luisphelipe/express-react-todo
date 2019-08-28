import React, { useState } from "react";
import axios from "axios";

function TaskForm(props) {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskContent, setTaskContent] = useState("");

  const handleTitleChange = event => {
    setTaskTitle(event.target.value);
  };

  const handleContentChange = event => {
    setTaskContent(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    axios
      .post("http://localhost:3000/tasks", {
        title: taskTitle,
        content: taskContent
      })
      .then(({ data: newTask }) => {
        props.setTasks(previousTasks => {
          return [...previousTasks, newTask];
        });
      })
      .catch(errors => {
        console.log(errors);
      })
      .finally(() => {
        setTaskTitle("");
        setTaskContent("");
      });
  };

  return (
    <div>
      <label htmlFor="taskTitle">Titulo</label>
      <input
        type="text"
        name="taskTitle"
        onChange={handleTitleChange}
        value={taskTitle}
      />

      <label htmlFor="taskContent">Conteudo</label>
      <input
        type="text"
        name="taskContent"
        onChange={handleContentChange}
        value={taskContent}
      />

      <button type="submit" onClick={handleSubmit}>
        Novo Task
      </button>
    </div>
  );
}

export default TaskForm;
