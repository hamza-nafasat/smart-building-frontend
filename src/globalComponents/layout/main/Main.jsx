import React from 'react'
import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <main className='h-full overflow-y-scroll custom-scroll bg-white rounded-[14px] p-4'>
        <Outlet />
    </main>
  )
}

export default Main