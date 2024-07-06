import React from 'react'
import { Link } from 'react-router-dom'

const Stage3 = () => {
    return (
        <div>



            <div className="flex justify-center flex-col items-center">

                <div className='flex justify-center items-center flex-col text-white'>
                    <h5 className='my-6'>RECONFIRM WITHDRAWAL AMOUNT</h5>
                    <div className='w-[35vw] h-12 flex justify-between items-center bg-gray-300'>
                        <div className='flex ml-8 gap-2 outline-none'>
                            <span className='text-black line-through text-2xl'>N</span>
                            <input className='outline-none text-right pr-2 text-black scroll-m-0 overflow-hidden' type="number" />
                            <h4 className='text-black text-2xl'>.00</h4>
                        </div>
                        <h3 className='bg-gray-500 px-6 mr-8'>NGN</h3>
                    </div>
                </div>
                <div className='flex flex-col mt-8'>
                    <label className="text-white mb-1 text-sm" htmlFor="account">
                        Reconfirm user password
                    </label>
                    <input
                        type="password"
                        id="account"
                        name=""
                        required

                        className="w-[35vw] bg-red-700 py-2 px-4 rounded inline-block outline-none border-none transition-all duration-300 mt-1 text-2xl"
                    />
                </div>



                <div className='w-full flex justify-center items-center'>
                    <Link to="/dashboard/withdrawal/success"><button className='bg-green-600 w-[25vw] flex justify-center items-center h-10 mt-20 text-2xl'>WTHDRAW</button></Link>
                </div>
            </div>
        </div >
    )
}

export default Stage3
