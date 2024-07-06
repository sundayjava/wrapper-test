import React from 'react'
import { Link } from 'react-router-dom'

const Stage2 = () => {
    return (
        <div>
            <div className="flex justify-center flex-col items-center">
                <div className='flex justify-center items-center flex-col text-white'>
                    <h5 className='my-4'>ENTER AMOUNT</h5>

                </div>

                <div className='flex justify-center items-center flex-col text-white'>
                    <form method="post" >
                        <div className="space-y-1">
                            <div>
                                <label className="text-white mb-1 text-sm" htmlFor="holder">
                                    Account Holder
                                </label>
                                <input
                                    type="text"
                                    id="holder"
                                    name=""
                                    required

                                    className="w-full py-2 px-4 rounded inline-block outline-none border-2 focus:border-slate-500 transition-all duration-300 mt-1"
                                />
                            </div>

                            <div>
                                <label className="text-white mb-1 text-sm" htmlFor="bank">
                                    Bank Name
                                </label>
                                <input
                                    type="text"
                                    id="bank"
                                    name=""
                                    required

                                    className="w-full py-2 px-4 rounded inline-block outline-none border-2 focus:border-slate-500 transition-all duration-300 mt-1"
                                />
                            </div>

                            <div>
                                <label className="text-white mb-1 text-sm" htmlFor="account">
                                    Account Number
                                </label>
                                <input
                                    type="number"
                                    id="account"
                                    name=""
                                    required

                                    className="w-full py-2 px-4 rounded inline-block outline-none border-2 focus:border-slate-500 transition-all duration-300 mt-1"
                                />
                            </div>


                        </div>



                        <div className='flex justify-between items-center w-96 m-0 '>
                            <Link to='/dashboard/withdrawal/form'><button className='bg-red-500  w-[7vw] flex justify-center items-center h-8 mt-20 text-xl'>CANCEL</button></Link>
                            <Link to='/dashboard/withdrawal/form/2'><button className='bg-green-600 w-[5vw] flex justify-center items-center h-8 mt-20 text-xl'>NEXT</button></Link>
                        </div>
                    </form>
                </div>
            </div></div>
    )
}

export default Stage2