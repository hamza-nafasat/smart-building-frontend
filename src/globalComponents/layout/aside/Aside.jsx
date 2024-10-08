import React from 'react'
import logo from '../../../assets/images/default/logo.png'
import { Hambarger } from '../../../assets/svgs'

const Aside = () => {
  return (
    <aside className='w-[180px] 2xl:w-[220px] bg-primary rounded-xl p-4'>
        <div className="flex items-center justify-between gap-4">
             <img src={logo} alt="logo" className='w-[30px]' />
             <div className='cursor-pointer'>
                <Hambarger />
             </div>
        </div>
        <div className="my-5 w-full h-[2px] bg-[#FFFFFF33]"></div>
    </aside>
  )
}

export default Aside