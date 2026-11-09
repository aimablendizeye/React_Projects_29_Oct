 
import { Divide } from "lucide-react";
import React, {useState} from "react";

function TodolistApp () {

    const [tasks,setTasks] = useState([]);
    const [newTask,setNewTask] = useState("")


    function handleInputChange (event) {
        setNewTask(event.target.value); 

    }
    function addTask () {
        if (newTask.trim() !=="") {
            setTasks ([...tasks,newTask]);
            setNewTask("");

        }
       
    }

    function deleteTask (index) {
            const updated = tasks.filter((_, i) => i !== index);
            setTasks(updated);


    }

    function moveTasksUp (index) {

        if (index > 0) {

    const updatedTasks = [...tasks];
        [updatedTasks[index],updatedTasks[index-1]]  = [updatedTasks[index-1],updatedTasks[index]] 

        setTasks(updatedTasks);

        }
       

    }

    function moveTasksDown (index) {

        if (index < tasks.length-1) {
       const updatedTasks = [...tasks];
        [updatedTasks[index],updatedTasks[index+1]]  = [updatedTasks[index+1],updatedTasks[index]] 

        setTasks(updatedTasks);
        }
       

    }

    return (
        <>
          <div className="flex flex-col gap-3 pl-20 pt-20">
            <h2 className="font-bold ">To Do List APP</h2>
            <input type="text" 
                    placeholder="Enter a tasks" 
                    value={newTask} 
                    onChange={handleInputChange}
                    className="w-fit border border-black "/>
        </div>

        <button className=" px-4 py-1 ml-52 mt-2 bg-blue-400 w-fit  rounded-3xl"
                onClick={addTask}>Add</button>

                <ol  className="list-decimal list-inside pl-20 mt-4 flex flex-col gap-4">
                    {tasks.map((task,index) => 
                        <li key={index}>
                            <span className="">{task}</span>

                            <button 
                                onClick={() => deleteTask(index)} className="px-2 ml-2 bg-blue-400 rounded-3xl ">
                                Delete
                            </button>

                             <button 
                                onClick={() => moveTasksUp(index)} className="px-2 ml-2 bg-blue-400 rounded-3xl ">
                                👆
                            </button>

                             <button 
                                onClick={() => moveTasksDown(index)} className="px-2 ml-2 bg-blue-400 rounded-3xl ">
                                👇
                            </button>
                        </li>
                    )}
                </ol>
        </>
      
        
    )
}

export default TodolistApp;