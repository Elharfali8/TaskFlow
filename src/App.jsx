
import { AuthDetails, Login, Register, TodoInput } from "./components"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTask } from "./features/tasksSlice"
import Task from "./components/Task"

function App() {
  const { tasks } = useSelector((store) => store.tasks)
  const [inputValue, setInputValue] = useState('')
  const [registerIsOpen, setRegisterIsOpen] = useState(false)
  const [loginIsOpen, setLoginIsOpen] = useState(false)
  const dispatch = useDispatch()

  const handleInput = (e) => {
    const value = e.target.value
    setInputValue(value)
  }

  const handleAddTask = (text) => {
    dispatch(addTask(text))
  }

  const handleRegister = () => {
    setRegisterIsOpen((prev) => !prev)
  }

  const handleLogin = () => {
    setLoginIsOpen((prev) => !prev)
  }

  const handleBoth = () => {
    setRegisterIsOpen((prev) => !prev)
    setLoginIsOpen((prev) => !prev)
}
  

  return (
    <main className="bg-[#f5f5f5] w-full min-h-[100vh] grid place-items-center px-4 lg:px-2 xl:px-0 ">
      <div className="container mx-auto p-6 bg-[#ffffff] rounded-xl min-h-[80vh] relative">
        {registerIsOpen && (
          <div className="absolute main-opacity inset-0 grid place-items-center z-[98]">
             <Register handleRegister={handleRegister} handleBoth={handleBoth}  />
          </div>
        )}

{loginIsOpen && (
          <div className="absolute main-opacity inset-0 grid place-items-center z-[98]">
             <Login handleLogin={handleLogin} handleBoth={handleBoth}  />
          </div>
        )}
       
        <div className="flex justify-between items-center flex-wrap mb-4 pb-1 border-b border-b-black">
          <p className="text-lg md:text-xl poppins-medium">
            {tasks.length > 0 && tasks?.filter((task) => task.isCompleted === true).length} {tasks.length > 0 && '/'} {tasks.length}  todos completed
          </p>
          {/* ------------- */}
          <AuthDetails />
        </div>
        <div className="grid lg:grid-cols-5 xl:grid-cols-7">
          {/* ---------- */}
          <div className="lg:order-1  order-2 lg:col-span-3 xl:col-span-4 py-2 md:py-3 lg:py-4">
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
          {/* ----------------- */}
          <div className="lg:order-2  order-1 lg:col-span-2 xl:col-span-3 py-2 md:py-3 lg:py-4 px-2  flex flex-col justify-between lg:min-h-[70vh] lg:border-l lg:border-l-black">
            <TodoInput
              inputValue={inputValue}
              setInputValue={setInputValue}
              handleInput={handleInput}
              handleAddTask={handleAddTask}
            />
            <div className="grid place-items-center gap-y-2 lg:gap-y-3 mt-6 lg:mt-0">
              <button className='w-full xl:max-w-[90%] bg-[#2196F3] text-[#ffffff] rounded-lg h-[32px] md:h-[34px] lg:h-[38px] text-lg  poppins-medium capitalize transition-all ease-in-out duration-150 hover:tracking-widest' onClick={() => setLoginIsOpen(true)}>Login</button>
              <button className='w-full xl:max-w-[90%] bg-[#FF9800] text-[#ffffff] rounded-lg h-[32px] md:h-[34px] lg:h-[38px] text-lg  poppins-medium capitalize transition-all ease-in-out duration-150 hover:tracking-widest' onClick={() => setRegisterIsOpen(true)}>register</button>
            </div>
          </div>
          {/* -------------- */}
        </div>
      </div>
      
    </main>
  )
}

export default App
