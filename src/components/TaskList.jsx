import React, { useState } from "react";
import TaskForm from "./TaskForm";
import Task from "./Task";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

	const deleteTask = (index) => {
    setTasks(tasks.filter((task, i) => i !== index));
  };

  return (
    <div>
      <TaskForm onSubmit={addTask} />
      {tasks.map((task, index) => (
        <Task key={index} task={task} onDeleteTask={() => deleteTask(index)} />
      ))}
    </div>
  );
};

export default TaskList;
