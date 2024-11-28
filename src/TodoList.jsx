import React,{useState} from "react";

function TodoList(){
    const [tasks,setTasks]=useState("");
    const [taskArr,setTaskArr]=useState([]);
    function handleAddChange(event){
        setTasks.event.target=value;

    }
    function addButton(){

    }
    function deleteButton(){

    }
    return(
        <>
        <h1>Todo App</h1>
        <input type="text" placeholder="Add a new task" onChange={handleAddChange}/>
        <button onclick={addButton}>Add</button>
        <button onclick={deleteButton}>Delete</button>
        </>


    );
}
export default TodoList;