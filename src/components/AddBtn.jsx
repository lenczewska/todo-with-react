import React from 'react'

function AddBtn({ addTodo }) {
  return (
    <button
      onClick={addTodo}
      className='p-[5px] w-[100px] rounded-xl bg-orange-400 text-white cursor-pointer'>
      Add
    </button>
  )
}

export default AddBtn
