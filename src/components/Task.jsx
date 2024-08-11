import { FaTimes } from "react-icons/fa"
import { useDispatch } from "react-redux"
import { handleComplete } from "../features/tasksSlice"

const Task = ({ text, id, isCompleted }) => {
    const dispatch = useDispatch()

  return (
      <div>
          <div className={`${isCompleted ? 'bg-[#d9d9d9]' : 'bg-transparent'} px-2 flex items-center justify-between border border-[#e0e0e0] text-[#333333]  rounded-lg py-1 shadow-custom`}>
              <button className={`${isCompleted ? 'line-through' : ''} flex items-center gap-x-1 text-lg lg:text-xl poppins-medium tracking-wider`} onClick={() => dispatch(handleComplete(id))}>
                  <input type="checkbox" checked={isCompleted} className="" />
                  <span>{text}</span> </button>
                <button><FaTimes size={25} color="red" /></button>
              </div>
    </div>
  )
}

export default Task