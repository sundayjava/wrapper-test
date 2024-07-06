import { BiWallet } from "react-icons/bi"
import { FcApproval } from "react-icons/fc"
import { RiLineChartLine } from "react-icons/ri"
import { Outlet } from "react-router-dom"

const Withdrawal = () => {
  return (
    <div>
      <div className='w-full h-full flex flex-col'>
        <div className='w-[69vw] mt-8 flex justify-around items-center h-[20vh]'>
          <div className='sm-full border w-[22vw] border-gray-300 h-36 rounded-lg flex flex-wrap items-center justify-center text-white gap-12 bg-blue-800 bg-opacity-25'>
            <RiLineChartLine className="text-6xl" />

            <div>
              <h3 className="text-xl">Total Revenue</h3>
              <span className="flex gap-2 text-3xl">
                <p>NGN</p>
                <p>5796</p>
              </span>
            </div>
          </div>
          <div className='sm-full border w-[22vw] border-gray-300 h-36 rounded-lg flex flex-wrap items-center justify-center text-white gap-12 bg-green-800 bg-opacity-25 backdrop-blur-sm'>
            <BiWallet className="text-6xl" />

            <div>
              <h3 className="text-xl">Total Redrawal</h3>
              <span className="flex gap-2 text-3xl">
                <p>NGN</p>
                <p>0.00</p>
              </span>
            </div>
          </div>
        </div>

        <div className="">
          <Outlet />
        </div>


      </div >
    </div >
  )
}

export default Withdrawal
