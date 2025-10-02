import React from 'react'
import InpField from './InpField'
import AddBtn from './AddBtn'


function TodoInp({ value, setValue, addTodo }) {
  return (
    <div className=' flex justify-between'>
      <InpField value={value} setValue={setValue} />
      <AddBtn addTodo={addTodo} />
    </div>
  )
}

export default TodoInp
