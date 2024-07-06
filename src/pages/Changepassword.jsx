import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaAngleLeft, FaEye, FaEyeSlash } from "react-icons/fa";
import { Oval } from "react-loader-spinner";
import toast from "react-hot-toast";
import axiosInstance from "../api/axios";

const Changepassword = () => {
  const [formData, setFormData] = useState({
    email: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [register, setRegister] = useState(false);
  const [errors, setErrors] = useState({});
  const [passwordVisible, setPasswordVisible] = useState({
    newPassword: false,
    confirmPassword: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const axios = axiosInstance;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid";
    }
    if (!formData.newPassword) {
      newErrors.newPassword = "New password is required";
    }
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirm password is required";
    } else if (formData.newPassword !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    return newErrors;
  };

 const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();

    if (Object.keys(formErrors).length === 0) {
        setIsLoading(true);
        try {
            console.log('Sending data:', formData); // Log request data
            const response = await axios.post("content-creators/initiate-password-change", formData);
            if (response.status === 200) {
                localStorage.setItem("email", formData.email);
                toast.success(response.data.message);
                setRegister(true);
                navigate('/otp', { state: { email: formData.email } });
            } else {
                toast.error("Something went wrong");
            }
        } catch (error) {
            if (error.response) {
                // Server responded with a status other than 200 range
                console.error('Error response:', error.response.data);
                toast.error(error.response.data || "An error occurred, try again later");
            } else if (error.request) {
                // Request was made but no response received
                console.error('Error request:', error.request);
                toast.error("No response received from server");
            } else {
                // Something else caused the error
                console.error('Error message:', error.message);
                toast.error("An error occurred, try again later");
            }
        } finally {
            setIsLoading(false);
        }
    } else {
        setErrors(formErrors);
    }
};


  const togglePasswordVisibility = (field) => {
    setPasswordVisible({
      ...passwordVisible,
      [field]: !passwordVisible[field],
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-600">
      <div className="absolute top-4 left-4">
        <Link to="/" className="flex items-center gap-2 text-white">
          <FaAngleLeft className="text-2xl" />
          <span className="text-sm">Home</span>
        </Link>
      </div>

      <div className="bg-blue-800 p-6 rounded-lg shadow-lg w-max min-w-[350px]">
        <h2 className="text-center text-lg font-bold text-green-400 mb-4">
          Change password
        </h2>

        {register ? (
          // Remove Otp component and use navigate instead
          <p className="text-center text-white">Redirecting to OTP page...</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="text-white text-sm font-bold mb-2 flex gap-1"
                htmlFor="email"
              >
                <span>Email</span>
                <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                name="email"
                className="w-full py-2 px-4 border-2 focus:border-slate-500 rounded bg-white text-zinc-800 text-sm outline-none transition-all duration-300"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>

            <div>
              <label
                className="text-white text-sm font-bold mb-2 flex items-center gap-1"
                htmlFor="new-password"
              >
                <span>New Password</span>
                <span className="text-red-600">*</span>
              </label>
              <div className="relative mb-4">
                <input
                  type={passwordVisible.newPassword ? "text" : "password"}
                  name="newPassword"
                  className="w-full py-2 px-4 border-2 focus:border-slate-500 rounded bg-white text-zinc-800 text-sm outline-none transition-all duration-300"
                  placeholder="New Password"
                  value={formData.newPassword}
                  onChange={handleChange}
                  required
                />
                <button
                  type="button"
                  onClick={() => togglePasswordVisibility("newPassword")}
                  className="absolute top-1/2 right-2 -translate-y-[50%] cursor-pointer"
                >
                  {passwordVisible.newPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {errors.newPassword && (
                <p className="text-red-500 text-sm">{errors.newPassword}</p>
              )}
            </div>

            <div>
              <label
                className="text-white text-sm font-bold mb-1 flex items-center gap-1"
                htmlFor="confirm-password"
              >
                <span>Confirm password</span>
                <span className="text-red-600">*</span>
              </label>
              <div className="relative mb-4">
                <input
                  type={passwordVisible.confirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  className="w-full py-2 px-4 border-2 focus:border-slate-500 rounded bg-white text-zinc-800 text-sm outline-none transition-all duration-300"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
                <button
                  type="button"
                  onClick={() => togglePasswordVisibility("confirmPassword")}
                  className="absolute top-1/2 right-2 -translate-y-[50%] cursor-pointer"
                >
                  {passwordVisible.confirmPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
              )}
            </div>

            <button
              className="w-full bg-green-500 text-white p-3 rounded-lg font-bold hover:bg-green-600 text-sm mt-4 flex items-center justify-center"
              type="submit"
              disabled={isLoading}
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
                "Change password"
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Changepassword;
