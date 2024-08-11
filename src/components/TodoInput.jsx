import React from 'react'

const TodoInput = ({ inputValue, handleInput, handleAddTask }) => {
    
  return (
      <form onSubmit={(e) => {
          e.preventDefault()
          handleAddTask(inputValue)
      }} className='grid gap-y-1 lg:gap-y-2 place-items-center'>
          <input
              type="text"
              placeholder='Add a todo'
              className='w-full xl:max-w-[90%] h-[32px] md:h-[34px] lg:h-[38px] focus:outline-none px-2 poppins-medium sm:text-lg text-[#333333] rounded-lg bg-[#e0e0e0]'
              value={inputValue}
              onChange={handleInput}
          />
          <button type='submit' className='w-full xl:max-w-[90%] bg-[#4CAF50] text-[#ffffff] rounded-lg h-[32px] md:h-[34px] lg:h-[38px] text-lg  poppins-medium transition-all ease-in-out duration-150 hover:tracking-widest'>
              Add to list
          </button>
    </form>
  )
}

export default TodoInput