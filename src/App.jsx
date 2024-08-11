import { CgProfile } from "react-icons/cg"
import { TodoInput } from "./components"
import { FaTimes } from "react-icons/fa"

function App() {

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
              <p className="text-lg lg:text-xl tracking-wider text-[#333333] poppins-medium">3 todos</p>
            </div>
            <div className="grid gap-y-2">
              <div className="px-2 flex items-center justify-between border border-[#e0e0e0] text-[#333333] rounded-lg py-1 shadow-custom">
                <button className="">Build the app </button>
                <button><FaTimes size={25} color="red" /></button>
              </div>
              <div className="px-2 bg-[#d9d9d9] flex items-center justify-between border border-[#e0e0e0] text-[#333333] rounded-lg py-1 shadow-custom">
                <button className=" line-through">Build the app </button>
                <button><FaTimes size={25} color="red" /></button>
              </div>
            </div>
          </div>
          <div className=" lg:col-span-2 xl:col-span-3 py-2 md:py-3 lg:py-4 px-2  flex flex-col justify-between min-h-[70vh]">
            <TodoInput />
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
