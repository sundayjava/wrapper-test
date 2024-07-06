import React from 'react'
import { Outlet } from 'react-router-dom'

const Fillform = () => {
    return (
        <div>
            <div className='flex justify-center items-center flex-col mt-12 w-[69vw]'>
                <h2 className='text-white text-2xl mb-5'>WITHDRAWAL PROCESS</h2>

                <div className="flex gap-4">
                    <span className='w-12 bg-gray-400 h-2'></span>
                    <span className='w-12 bg-gray-400 h-2'></span>
                    <span className='w-12 bg-green-400 h-2'></span>
                </div>
                <div className="flex justify-center flex-col items-center mt-3">

                    <Outlet />


                </div>
            </div >

        </div>
    )
}

export default Fillform