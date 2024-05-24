import React from 'react'
import TableComponent from '../components/TableComponent'
import Filters from '../components/Filters'
import { Outlet } from 'react-router-dom'


// creating Crypto Page and the Table Information 
const Crypto = () => {
  return (
    <section
    className='w-[80%] h-full flex-col mt-16 mb-24 relative'>
    <Filters />
      <TableComponent />
      <Outlet />
    </section>
  )
}

export default Crypto