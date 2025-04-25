import React from 'react'
import TaskShow from './TaskShow'

const TaskList = ({task,onDelete,onUpdate}) => {
  return (
    <div className='task-list'>
      {
        task.map((task,index) => (
          <TaskShow task={task} key={index} onDelete={onDelete} onUpdate={onUpdate}  />
        ))
      }
    </div>
  )
}

export default TaskList