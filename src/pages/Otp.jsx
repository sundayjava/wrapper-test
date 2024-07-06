import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Oval } from "react-loader-spinner";
import axiosInstance from "../api/axios";

const Otp = ({ email }) => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const axios = axiosInstance;
  const navigate = useNavigate();

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    // Focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleKeyUp = (element, index) => {
    if (element.key === "Backspace" && element.target.previousSibling) {
      element.target.previousSibling.focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (otp.join("").length !== 6) {
      setError("Please fill all the fields");
    } else {
      setIsLoading(true);

      await axios
        .post("content-creators/verify-token", {
          email,
          token: otp.join(""),
        })
        .then((response) => {
          toast(response.data);
          navigate("/success");
        })
        .catch((error) => toast(error.response.data));

      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-blue-600 text-white p-4">
      <div className="w-max min-w-[350px]">
        <h4 className="text-sm font-semibold text-center mb-4">
          Please input code sent to email
        </h4>

        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <div className="flex justify-center space-x-2 mb-4">
            {otp.map((data, index) => (
              <input
                key={index}
                type="text"
                name="otp"
                maxLength="1"
                value={data}
                onChange={(e) => handleChange(e.target, index)}
                onKeyUp={(e) => handleKeyUp(e, index)}
                className="w-10 h-10 text-center text-black bg-zinc-200 focus:border-slate-300 rounded outline-none border-2 transition-all duration-300"
              />
            ))}
          </div>
          {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
          <button
            type="submit"
            className="w-full py-3 bg-green-500 text-black font-bold rounded mt-8 text-sm flex items-center justify-center"
          >
            {isLoading ? (
              <Oval
                visible={true}
                height="25"
                width="25"
                color="#fff"
                ariaLabel="oval-loading"
                wrapperStyle={{}}
                wrapperClass=""
              />
            ) : (
              "Verify otp"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Otp;
