import React, { useState } from 'react'

const Form = () => {
  const [task, setTask] = useState([
    "Complete React project",
    "complete python"
  ]);

  const formSubmit = (e) => {
    e.preventDefault();
    let form = e.target;
    let formData = new FormData(form);
    let data = Object.fromEntries(formData.entries());
    if (data.task.trim() !== "") {
      setTask([...task, data.task]);//Add task to list
      form.reset(); //clear input field after form submit
    }
    console.log(data);
  }
  const deleteTask = (index) => {
    const newtasks = task.filter((_, i) => i !== index);
    setTask(newtasks);
  }
  return (
    <div>
      <h1>ToDo List</h1>
      <form onSubmit={formSubmit}>
        <label >Enter task</label>
        <input type="text" name='task' placeholder='Enter your task' />
        <button >Add Task</button>
      </form>
      <ul>
        {task.map((task, index) => {
          return (
            <li key={index}>{task}
              <button onClick={() => deleteTask(index)}>Delete</button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Form
