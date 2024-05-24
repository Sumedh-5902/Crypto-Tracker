import React from 'react'
// import { useTransition } from 'react'
import { NavLink } from 'react-router-dom'


// Creating a Navigation bar
const Navigation = () => {
  return (
    <nav 
    className='w-[40%] mt-16 flex justify-around align-middle
    border border-yellow rounded-lg
    '
    >
    <NavLink 
    to ="/"
    end
    className={
        // using isAcitve function when the user is interacting with the given interface 
        ({isActive}) => {
            return `w-full text-base text-center font-nunito m-2.5 

${isActive ? 'bg-yellow text-gray-300' : 'bg-gray-200 text-gray-100 hover:text-yellow active:bg-yellow active:text-gray-300'}  
    border-0 cursor-pointer rounded capitalize font-semibold`
        }
    }
    >
        Crypto
    </NavLink>

    <NavLink to ="/trending"
    className={
        ({isActive}) => {
            return `w-full text-base text-center font-nunito m-2.5

${isActive ? 'bg-yellow text-gray-300' : 'bg-gray-200 text-gray-100 hover:text-yellow active:bg-yellow active:text-gray-300'}
            border-0 cursor-pointer rounded capitalize font-semibold`
        }
    }
    >
        Trending
    </NavLink>

    <NavLink to ="/saved"
    className={
        ({isActive}) => {
            return `w-full text-base text-center font-nunito m-2.5

${isActive ? 'bg-yellow text-gray-300' : 'bg-gray-200 text-gray-100 hover:text-yellow active:bg-yellow active:text-gray-300'}
            border-0 cursor-pointer rounded capitalize font-semibold`
        }
    }
    >
        saved
    </NavLink>

    </nav>
  )
}

export default Navigation