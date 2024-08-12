import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { auth } from '../firebase'
import { Bounce, toast } from 'react-toastify';


const Login = ({ handleLogin, handleBoth }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    
    const signIn = (e) => {
        e.preventDefault();
        setError('');
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
                handleLogin();
                toast.success('Login successful', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,  // Make sure Bounce is imported
                });
            })
            .catch((error) => {
                console.log(error);
                setError(error.message);
                toast.error(`${error.message}`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,  
                });
            });
    }
    

  return (
      <div className='z-[99] p-6 rounded-xl bg-white w-full max-w-[400px]'>
          <div className='flex items-center justify-end'>
              <button type="button" onClick={handleLogin}><FaTimes size={25} /></button>
          </div>
          <div>
              <h1 className='text-2xl md:text-3xl lg:text-4xl tracking-wide poppins-medium mb-3 lg:mb-5'>Login :</h1>
              <form onSubmit={signIn} className='grid gap-y-2'>
                  <input 
                  type="email" 
                  name='email' 
                  placeholder='test@test.com' 
                      className='focus:outline-none px-2 poppins-medium sm:text-lg text-[#333333] rounded-lg bg-[#e0e0e0] h-[32px] md:h-[34px] lg:h-[38px]' 
                      value={email}
                        onChange={(e) => setEmail(e.target.value)}
                  />
                  <input 
                  type="password" 
                  name='password' 
                  placeholder='********' 
                      className='focus:outline-none px-2 poppins-medium sm:text-lg text-[#333333] rounded-lg bg-[#e0e0e0] h-[32px] md:h-[34px] lg:h-[38px]'
                      value={password}
                        onChange={(e) => setPassword(e.target.value)}
                   />
                  <button type="submit" className='w-full bg-[#2196F3] text-[#ffffff] rounded-lg h-[32px] md:h-[34px] lg:h-[38px] text-lg  poppins-medium capitalize transition-all ease-in-out duration-150 hover:tracking-widest'>Login</button>
                  <div className='grid place-items-center mt-1 lg:mt-2'>
                      <div className='lg:text-lg'>or <button className='text-[#FF9800]' onClick={handleBoth}>Register</button></div>
                  </div>
              </form>
          </div>
    </div>
  )
}

export default Login