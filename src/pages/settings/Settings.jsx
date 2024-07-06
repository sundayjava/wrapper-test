import React from 'react'
import { useState } from 'react'
import { FaEye } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { IoIosArrowDown, IoIosArrowForward, IoIosArrowUp } from 'react-icons/io'

const Settings = () => {
  const [dropdown, setDropdown] = useState(false)
  const [dropdown1, setDropdown1] = useState(false)
  const [dropdown2, setDropdown2] = useState(false)
  const [dropdown3, setDropdown3] = useState(false)



  const toggledropdown = () => {
    setDropdown(!dropdown);
  };

  const toggledropdown1 = () => {
    setDropdown1(!dropdown1);
  };

  const toggledropdown2 = () => {
    setDropdown2(!dropdown2);
  };

  const toggledropdown3 = () => {
    setDropdown3(!dropdown3);
  };

  return (
    <div>
      <div className='my-8 flex flex-col items-center'>
        <h3 className='text-white text-3xl font-[700]'>SETTINGS</h3>
        <div>
          <div className='text-black bg mt-8'>

            <div className='w-[6 0vw] bg-white/70 text-black flex justify-between items-center h-12 px-8'>
              <h3>GENERAL</h3>
              <div className='' onClick={toggledropdown}>
                {dropdown ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </div>

            </div>
            {dropdown && (
              <ul>
                <li><div className='w-[60vw] bg-white/20 text-black flex justify-between items-center h-12 px-8'>
                  <h3>THEME</h3>
                  <div className='flex items-center gap-4'>
                    <span className='h-6 w-6 bg-black rounded-full'></span>
                    <h4>DARK</h4>
                  </div>
                </div>
                </li>
                <li><div className='w-[60vw] bg-white/20 text-black flex justify-between items-center h-12 px-8'>
                  <h3>PALLETE ACTION</h3>
                  <span className='text-white'>WHITE</span>
                </div>
                </li>
              </ul>
            )}

          </div>
          <div className='text-black bg'>
            <div className='w-[60vw] bg-white/70 text-black flex justify-between items-center h-12 px-8'>
              <h3>SECURITY</h3>
              <div className='' onClick={toggledropdown1}>
                {dropdown1 ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </div>
            </div>
            {dropdown1 && (
              <ul>
                <li>
                  <div className='w-[60vw] bg-white/20 text-black flex justify-between items-center h-12 px-8'>
                    <h3>ISOLATION MODE</h3>
                    <span className='flex items-center'>
                      <span>STRONG</span>
                    </span>
                  </div>
                </li>
                <li>
                  <div className='w-[60vw] bg-white/20 text-black flex justify-between items-center h-12 px-8'>
                    <h3>SIGN OUT</h3>
                    <span className='text-gray-800'>AUTO</span>
                  </div>
                </li>
              </ul>
            )
            }



          </div>
          <div className='text-black bg'>
            <div className='w-[60vw] bg-white/70 text-black flex justify-between items-center h-12 px-8'>
              <h3>ACCOUNT</h3>
              <div className='' onClick={toggledropdown2}>
                {dropdown2 ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </div>

            </div>
            {dropdown2 && (
              <ul>
                <li><div className='w-[60vw] bg-white/20 text-black flex justify-between items-center h-12 px-8'>
                  <h3>VIEW ACCOUNT</h3>
                  <div className='flex items-center gap-2'>
                    <span>herkintormiwer@gmail.com</span>
                    <Link to="/dashboard/settings/about">
                      <IoIosArrowForward />
                    </Link>
                  </div>
                </div></li>
              </ul>
            )}
          </div>
          <div className='text-black bg'>
            <div className='w-[60vw] bg-white/70 text-black flex justify-between items-center h-12 px-8'>
              <h3>INFO</h3>
              <div className='' onClick={toggledropdown3}>
                {dropdown3 ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </div>
            </div>
            {dropdown3 && (
              <ul>
                <li><div className='w-[60vw] bg-white/20 text-black flex justify-between items-center h-12 px-8'>
                  <h3>PASSWORD</h3>
                  <div className='flex items-center gap-2'>
                    <span>herkintormiwer@gmail.com</span>
                    <FaEye />
                  </div>
                </div></li>
                <li ><div className='w-[60vw] bg-white/20 text-black flex justify-between items-center h-12 px-8'>
                  <h3>PAYMENT</h3>
                  <div className='flex items-center gap-2'>
                    <span>herkintormiwer@gmail.com</span>
                    <Link to="/dashboard/settings/about"><IoIosArrowForward /></Link>
                  </div>
                </div></li>
              </ul>)}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Settings