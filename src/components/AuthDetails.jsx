import React, { useEffect, useState } from 'react'
import { auth } from '../firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { CgProfile } from 'react-icons/cg'

const AuthDetails = () => {
    const [authUser, setAuthUser] = useState(null)

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user)
            } else {
                setAuthUser(null)
            }
        })
        return () => {
            listen()
        }
    }, [])

    const userSignOut = () => {
        signOut(auth).then(() => {
            console.log('sign out successful');
            
        }).catch((err) => console.log(err)
        )
    }


    return (
            <div className="flex items-center gap-x-1">
            {authUser ? <div className='flex items-center justify-center gap-x-2 flex-wrap'>
                <p className='text-lg md:text-xl poppins-semibold'>{`Signed In as ${authUser.email}`}</p>
                <CgProfile size={27} />
                <button onClick={userSignOut} className='bg-red-400 text-white px-3 py-1 rounded-lg text-lg transition ease-in-out duration-150 hover:bg-red-500 w-full mt-2'>Sign out</button>
            </div> : <p className='text-lg tracking-wide poppins-medium'>Signed Out</p>}
    </div>
  )
}

export default AuthDetails