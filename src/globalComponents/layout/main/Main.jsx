import React from 'react'
import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <main className='h-full overflow-y-scroll custom-scroll'>
        <Outlet />
    </main>
  )
}

export default Main