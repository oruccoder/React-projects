import React, { useState } from 'react'
import TaskCreate from './TaskCreate';

const TaskShow = ({ task, onDelete,onUpdate }) => {
  console.log(task);

  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => {
    onDelete(task.id)
  }

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  }

  const handleSubmit = (id,updatedTitle,updatedTaskDesc) => {
    setShowEdit(false)
    onUpdate(id,updatedTitle,updatedTaskDesc)
  }

  return (

    <div>
      <div className='task-show'>

        {showEdit ? <TaskCreate task={task} taskFormUpdate={true} onUpdate={handleSubmit} /> : <div>
          <h3>Görəviniz</h3>
          <p>{task.title}</p>
          <h3>Ediləcəklər</h3>
          <p className='desc'>{task.taskDsc}</p>

          <div>
            <button className='task-delete' onClick={handleDeleteClick}>Sil</button>
            <button onClick={handleEditClick} className='task-edit'>Güncəllə</button>
          </div>
        </div>}
      </div>
    </div>
  )
}

export default TaskShow