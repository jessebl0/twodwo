import React, { useState } from "react";
//import Button from "@material-ui/core/Button";

export default function App() {
  //Need state for list of tasks
  const [tasks, setTasks] = useState([]);
  const [nameInput, setInputN] = useState("");
  const [descriptInput, setInputD] = useState("");
  const [dueInput, setInput] = useState("");

  //Need a function to add a task to the task list
  const handleAdd = () => {
    setTasks([
      ...tasks, {nameInput, descriptInput, dueInput}
    ])
  };


  const TodoItem = ({title, dueDate, description}) => {

    //Need a function to toggle whether the task is checked off or not
    const [checkOff, setCheckOff] = useState(null)
    const handleCheckOff = () => {
      setCheckOff(!checkOff)
    };

    //Need a function to delete the task from the todo list
    //Note that because we've placed this component inside of our main app,
    //it has direct access to the state of our main app
    const handleDelete = () => {
      setTasks(tasks.filter((item) => {
        if((item.nameInput === title) && (item.descriptInput === description) && (item.dueInput === dueDate)){
          return false;
        }
        else {
          return true
        }
      }))
    };

    return (
      <div style = {{textAlign: "center", borderStyle: "solid", paddingBottom: "10px", backgroundColor: "pink"}} >

        {(!checkOff) && <h1>{title}</h1>}
        {(!checkOff) && <h4>{description}</h4>}
        {(!checkOff) && <h4>{dueDate}</h4>}
        {(checkOff) && <h1 style = {{textDecoration: "line-through"}}>{title}</h1>}
        <button onClick={handleCheckOff}>Check off</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    );
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      Title
      {<input value = {nameInput} type = "text" onChange = {(e) => setInputN(e.target.value)}/>} Description
      {<input value = {descriptInput} type = "text" onChange = {(e) => setInputD(e.target.value)}/>} Due Date
      {<input value = {dueInput} type = "text" onChange = {(e) => setInput(e.target.value)}/>}
      <button onClick={handleAdd}>Add Todo Item</button>
      {/* <Button

      ></Button> */}

      
      {/* All of the tasks should render here. How can we transform the 
      list of tasks into a list of components? */}
      {tasks.map((item) => <TodoItem title = {item.nameInput} description = {item.descriptInput}
      dueDate = {item.dueInput}/>)}


    </div>
  );
}