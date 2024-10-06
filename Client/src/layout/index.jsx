import React from 'react'
import logo from '../assets/logo.png'

const AuthLayouts = ({children}) => {
  return (
    <>
        <header className='flex justify-center items-center py-3 h-20 shadow-md bg-gray-800 '>
            
        <h1 class="text-4xl font-bold text-white p-4 rounded-lg shadow-lg">Master Chat</h1>
        </header>

        { children }
    </>
  )
}

export default AuthLayouts