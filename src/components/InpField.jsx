import React from 'react'

function InputField({ value, setValue }) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className='p-[8px] w-[340px] rounded-xl bg-white border flex justify-center'
    />
  )
}

export default InputField
