import React, { useState } from "react";

const TaskForm = ({ onSubmit }) => {
  const [task, setTask] = useState({ title: "", description: "" });

  const handleChange = (event) => {
    setTask({ ...task, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(task);
    setTask({ title: "", description: "" });
  };

  return (
		<>
    <form className="formcontent" onSubmit={handleSubmit}>
      <input
				className="inputform"
        type="text"
        name="title"
        value={task.title}
        onChange={handleChange}
        placeholder="Título da Tarefa"
        required
      />
      <textarea
			className="inputform"
        name="description"
        value={task.description}
        onChange={handleChange}
        placeholder="Descrição da Tarefa"
        required
      />
      <button className= "buttonform" type="submit">Adicionar Tarefa</button>
    </form>
		<hr></hr>
		</>
  );
};

export default TaskForm;