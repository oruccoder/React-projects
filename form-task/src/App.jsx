import { useEffect, useState } from 'react'
import './App.css'
import TaskCreate from './components/TaskCreate'
import TaskList from './components/TaskList'
import axios from 'axios'

function App() {
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

  useEffect(() => {

    fetchTasks();

  },[])

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

  return (
    <div className='App'>
      <TaskCreate onCreate={createTask} />
      <h1>Görəvlər</h1>
      <TaskList task={tasks} onDelete={deleteTaskById} onUpdate={editTaskById} />
    </div>
  )
}

export default App
