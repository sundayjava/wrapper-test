import React from 'react'
import { FcApproval } from 'react-icons/fc'

const Final = () => {
    return (
        <div>
            <div className="flex h-[50vh] justify-center items-center flex-col mt-12 w-[69vw]">
                <div className="w-[30vw] h-60 bg-green-800/90 backdrop-blur-sm flex justify-center items-center flex-col">

                    <FcApproval className="text-8xl" />
                    <h2>WITHDRAW COMPLETE</h2>
                </div>
            </div> </div>
    )
}

export default Final