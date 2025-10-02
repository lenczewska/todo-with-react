import React from 'react'
import TodoItem from './TodoItem'

function TodoList({ tasks, handleDelete }) {
  return (
    <div className='flex flex-col gap-4'>
      {tasks.map((task, index) => (
        <TodoItem
          key={index}
          task={task}
          index={index}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  )
}

export default TodoList
