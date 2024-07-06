import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Stage1 = () => {

    const [formData, setFormData] = useState({
        amount: "",
    });

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        const formError = validateForm();

        if (Object.keys(formError).length === 0) {
            setIsSubmitted(true);
        } else {
            setError(formError);
        }
    };


    return (
        <div className='flex flex-col justify-center items-center mt-3'>
            <form onSubmit={handleSubmit} className='flex justify-center items-center flex-col'>
                <div className='bg-green-800 text-white rounded-md flex items-center justify-center w-[27vw] h-[15vh] gap-6'>
                    <div className='w-16'>
                        <div className='w-[100%] bg-black' >
                            <div className='text-center text-white w-[30%] bg-red-400'>30%</div>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <h3 className='text-2xl tracking-wide'>DAILY WITHDRAW LIMIT</h3>
                        <div className='flex w-[17vw] justify-between'>
                            <span className='w-16 h-2 mx-2 block transition-colors ease-linear'>ghhkjthljtk</span>
                            <span>of</span>
                            <span>kbfdkgbdf</span>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center flex-col text-white'>
                    <h5 className='my-6'>ENTER AMOUNT</h5>
                    <div className='w-[35vw] h-12 flex justify-between items-center bg-gray-300'>
                        <div className='flex ml-8 gap-2 outline-none'>
                            <span className='text-black line-through text-2xl'>N</span>

                            <input className='outline-none text-right pr-2 text-black'
                                onChange={handleChange}
                                maxLength="10"
                                name="amount"
                                value={formData.amount}
                                type="number" />
                            <h4 className='text-black text-2xl'>.00</h4>
                        </div>


                        <button className='bg-red-500 px-6 mr-8'>clear</button>
                    </div>
                </div>

                <div className='w-full flex justify-center items-center'>
                    <Link to="/dashboard/withdrawal/form/1"><button className='bg-green-600 w-[20vw] flex justify-center items-center h-10 mt-20 text-2xl'>NEXT</button></Link>
                </div>
            </form >
        </div >
    )
}

export default Stage1