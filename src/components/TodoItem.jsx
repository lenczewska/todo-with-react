import React from 'react'
import { IoIosCheckmarkCircleOutline } from "react-icons/io";


function TodoItem({ task, index, handleDelete }) {
  return (
    <div className="relative pl-[20px] w-full h-[30px] rounded-3xl bg-white border flex items-center">
      {task}
      <button
        onClick={() => handleDelete(index)}
        className="absolute right-[-1px] top-1/2 transform -translate-y-1/2 w-[30px] h-[30px] rounded-full bg-orange-400 text-white flex items-center justify-center shadow-lg cursor-pointer"
      >
        <IoIosCheckmarkCircleOutline />

        
      </button>
    </div>

  )
}

export default TodoItem
