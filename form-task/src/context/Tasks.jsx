import { createContext } from "react";
import axios from 'axios'
import { useEffect, useState } from 'react'

const TaskContext = createContext();

function Provider({children}){
    const[tasks,setTasks] = useState([])
      
      const createTask = async(title,taskDsc) => {
        const response = await axios.post('http://localhost:3000/tasks',{
          title,
          taskDsc
        })
        console.log(response);
        
        
        const createdTasks = [...tasks,(await response).data];
        setTasks(createdTasks);
      }
    
      const fetchTasks = async() => {
        const response = await axios.get('http://localhost:3000/tasks')
        setTasks(response.data)
      }
      const deleteTaskById = async(id) => {
        await axios.delete(`http://localhost:3000/tasks/${id}`)
       
     const afterDeletingTasks = tasks.filter((task) => {
         return task.id !==id;
       })
       setTasks(afterDeletingTasks)
     }
     
     const editTaskById = async(id,updatedTitle,updatedTaskDesc) => {
       await axios.put(`http://localhost:3000/tasks/${id}`,{
         title:updatedTitle,
         taskDsc:updatedTaskDesc
       })
       
       const updatedTask = tasks.map((task) => {
         if(task.id === id){
           return {id,title:updatedTitle,taskDsc:updatedTaskDesc}
         }
         return task;
         })
   
         setTasks(updatedTask)
       }

       const sharedValuesAndMethods = {
        tasks,
        createTask,
        fetchTasks,
        deleteTaskById,
        editTaskById,
       }
    return(
        <TaskContext.Provider value={sharedValuesAndMethods}>
            {children}
        </TaskContext.Provider>
    )
}


export {Provider}
export default TaskContext