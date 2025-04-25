import React, { useContext, useState } from 'react'
import TaskContext from '../context/Tasks';

const TaskCreate = ({task,taskFormUpdate}) => {

    const{updatedTask,createTask} = useContext(TaskContext)

    const[title, setTitle] = useState('');
    const[taskDsc, setTaskDcs] = useState('')
    

    const handleChange = (event) =>{
        setTitle(event.target.value)
    }

    const handletaskChange = (event) => {
        setTaskDcs(event.target.value);
    }

    const handleClick = (event) => {
        event.preventDefault();
        if(taskFormUpdate){
            // onUpdate(task.id,title,taskDsc)
            updatedTask(task.id,title,taskDsc)
        }
        else{
            // onCreate(title,taskDsc);
            createTask(title,taskDsc)
        }
        setTitle('');
        setTaskDcs('');
    }
  return (
    <div>
        {taskFormUpdate ? <div className='task-update'>
        <h3>Lütfən Taskı Düzənləyin!</h3>
        <form className='form-task'>
            <label>Başlığı Düzənləyin</label>
            <input value={title} onChange={handleChange} type="text" />

            <label>Taskı Düzənləyin!</label>
            <textarea value={taskDsc} onChange={handletaskChange} rows={5}></textarea>
            <button onClick={handleClick} className='form-button update-button'>Düzənləyin</button>
        </form>
    </div>: <div className='task-create'>
        <h3>Lütfən Task Əlavə Edin!</h3>
        <form className='form-task'>
            <label>Başlıq</label>
            <input value={title} onChange={handleChange} type="text" />

            <label>Task Girin!</label>
            <textarea value={taskDsc} onChange={handletaskChange} rows={5}></textarea>
            <button onClick={handleClick} className='form-button'>Oluştur</button>
        </form>
    </div> }
    </div>
  )
}

export default TaskCreate