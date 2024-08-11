import { CgProfile } from "react-icons/cg"
import { TodoInput } from "./components"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTask } from "./features/tasksSlice"
import Task from "./components/Task"

function App() {
  const {tasks} = useSelector((store) => store.tasks)
  const [inputValue, setInputValue] = useState('')
  const dispatch = useDispatch()

  const handleInput = (e) => {
    const value = e.target.value
    setInputValue(value)
  }

  const handleAddTask = (text) => {
    dispatch(addTask(text))
  }

  
  

  return (
    <main className="bg-[#f5f5f5] w-full min-h-[100vh] grid place-items-center px-4 lg:px-2 xl:px-0 ">
      <div className="container mx-auto p-6 bg-[#ffffff] rounded-xl min-h-[80vh]">
        <div className="flex justify-between items-center flex-wrap mb-4 pb-1 border-b border-b-black">
          <p className="text-lg md:text-xl poppins-medium">
            1/3 todos completed
          </p>
          <p className="flex items-center gap-x-1">
            <span className="text-lg md:text-xl poppins-semibold">Youssef</span>
            <span><CgProfile size={27} /></span>
          </p>
        </div>
        <div className="grid lg:grid-cols-5 xl:grid-cols-7">
          <div className=" lg:col-span-3 xl:col-span-4 py-2 md:py-3 lg:py-4">
            <div className="mb-2 lg:mb-4">
              <p className="text-lg lg:text-xl tracking-wider text-[#333333] poppins-medium">{tasks  ? tasks.length : '0'} todos</p>
            </div>

            {tasks.length > 0 ? (
                <div className="grid gap-y-2 ">
                {/* ============== */}
                {tasks?.map((task) => {
                    return <Task key={task.id} {...task} />
                  })}
              </div>
            ) : (
                <div className="mt-12 lg:mt-18 grid place-items-center text-black">
                    <h1 className="text-xl lg:text-2xl poppins-semibold tracking-wider">Add your first task!</h1>
                </div>
            )}

            
          </div>
          <div className=" lg:col-span-2 xl:col-span-3 py-2 md:py-3 lg:py-4 px-2  flex flex-col justify-between min-h-[70vh]">
            <TodoInput
              inputValue={inputValue}
              handleInput={handleInput}
              handleAddTask={handleAddTask}
            />
            <div className="grid place-items-center gap-y-1 lg:gap-y-2">
              <button className='w-full xl:max-w-[90%] bg-[#2196F3] text-[#ffffff] rounded-lg h-[32px] md:h-[34px] lg:h-[38px] text-lg  poppins-medium capitalize transition-all ease-in-out duration-150 hover:tracking-widest'>Login</button>
              <button className='w-full xl:max-w-[90%] bg-[#FF9800] text-[#ffffff] rounded-lg h-[32px] md:h-[34px] lg:h-[38px] text-lg  poppins-medium capitalize transition-all ease-in-out duration-150 hover:tracking-widest'>register</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
