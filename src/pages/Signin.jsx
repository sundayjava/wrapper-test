import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaAngleLeft, FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";
import { Oval } from "react-loader-spinner";
import axiosInstance from "../api/axios";
import Loading from "./load/Loading"; // Import the Loading component

const Signin = () => {
  const [formData, setFormData] = useState({
    productionName: "",
    password: "",
  });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isDelayedLoading, setIsDelayedLoading] = useState(false); // State for delayed loading

  const axios = axiosInstance;
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.productionName) {
      newErrors.productionName = "This field is required";
    }
    if (!formData.password) {
      newErrors.password = "This field is required";
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();

    if (Object.keys(formErrors).length === 0) {
      setIsLoading(true);
      try {
        const response = await axios.post("content-creators/login", {
          productionName: formData.productionName,
          password: formData.password,
        });
        toast(response.data);
        setTimeout(() => {
          navigate("/dashboard");
        }, 2000); // Delay navigation by 2 seconds
      } catch (err) {
        toast(err.response.data);
      } finally {
        setIsLoading(false);
      }
    } else {
      setErrors(formErrors);
    }
  };

  const handleDelayedNavigation = (path) => {
    setIsDelayedLoading(true);
    setTimeout(() => {
      setIsDelayedLoading(false);
      navigate(path);
    }, 2000); // 2-second delay
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  if (isDelayedLoading) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-600">
      <div className="absolute top-4 left-4">
        <Link to="/con" className="flex items-center gap-2 text-white">
          <FaAngleLeft className="text-2xl" />
          <span className="text-sm">Home</span>
        </Link>
      </div>

      <div className="bg-blue-800 p-6 rounded-lg shadow-lg w-max min-w-[350px] text-center">
        <h2 className="text-lg font-bold text-green-400 mb-4">
          Welcome Creator
        </h2>
        <h4 className="text-white mb-8 text-sm">Please sign in</h4>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              name="productionName"
              className="w-full py-2 px-4 border-2 focus:border-slate-500 rounded bg-white text-zinc-800 text-sm outline-none transition-all duration-300"
              placeholder="Production name"
              value={formData.productionName}
              onChange={handleChange}
            />
            {errors.productionName && (
              <p className="text-red-500 text-[0.7rem] text-left">
                {errors.productionName}
              </p>
            )}
          </div>

          <div className="mb-4">
            <div className="relative">
              <input
                type={passwordVisible ? "text" : "password"}
                name="password"
                className="w-full py-2 px-4 border-2 focus:border-slate-500 rounded bg-white text-zinc-800 text-sm outline-none transition-all duration-300"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-3 text-zinc-600"
              >
                {passwordVisible ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-[0.7rem] text-left">
                {errors.password}
              </p>
            )}
          </div>

          <div className="flex items-center justify-between gap-4 mb-4 text-white text-[0.75rem]">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Remember Me
            </label>
            <button
              type="button"
              onClick={() => handleDelayedNavigation("/forgot")}
              className="text-green-400"
            >
              Forgot password?
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-lg font-bold hover:bg-green-600 mt-4 text-sm flex items-center justify-center"
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
              "Sign in"
            )}
          </button>
        </form>

        <div className="flex items-center justify-center gap-2 mt-4 text-white text-[0.7rem]">
          <span>Don't have an account?</span>
          <button
            type="button"
            onClick={() => handleDelayedNavigation("/con")}
            className="text-green-400"
          >
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signin;
