import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Register from "./Register/Register";


const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    productionName: "",
    productionLocation: "",
    password: "",
    confirmPassword: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const performValidation = async () => {
    if (response.status === 200) {
      console.log("Registration successful!");
      navigate("/register");
    } else {
      window.alert("Registration failed. Please try again.");
      console.log(response);
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.productionName) {
      newErrors.productionName = "Production Name is required";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formErrors = validateForm();

    if (Object.keys(formErrors).length === 0) {
      setIsSubmitted(true);

      console.log(formErrors)
    } else {
      setErrors(formErrors);
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-600 p-4">
      <div className="bg-blue-700 p-8 rounded-lg shadow-lg w-max">
        <h2 className="text-white text-center text-xl font-bold mb-10">
          Creator's Sign Up
        </h2>
        {isSubmitted ? (
          <Register registrationData={formData} />
        ) : (
          <div className="w-max min-w-[300px]">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Fullname"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full py-2 px-4 border-2 focus:border-slate-500 rounded bg-white text-zinc-800 text-sm outline-none transition-all duration-300"
                />
                {errors.fullName && (
                  <p className="text-red-600 text-[0.65rem] font-medium mt-1">
                    {errors.fullName}
                  </p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full py-2 px-4 border-2 focus:border-slate-500 rounded bg-white text-zinc-800 text-sm outline-none transition-all duration-300"
                />
                {errors.email && (
                  <p className="text-red-600 text-[0.65rem] font-medium">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <input
                  type="text"
                  name="productionName"
                  placeholder="Production Name?"
                  value={formData.productionName}
                  onChange={handleChange}
                  className="w-full py-2 px-4 border-2 focus:border-slate-500 rounded bg-white text-zinc-800 text-sm outline-none transition-all duration-300"
                />
                {errors.productionName && (
                  <p className="text-red-600 text-[0.65rem] font-medium mt-1">
                    {errors.productionName}
                  </p>
                )}
              </div>

              <div>
                <input
                  type="text"
                  name="productionLocation"
                  placeholder="Production Location?"
                  value={formData.productionLocation}
                  onChange={handleChange}
                  className="w-full py-2 px-4 border-2 focus:border-slate-500 rounded bg-white text-zinc-800 text-sm outline-none transition-all duration-300"
                />
                {errors.productionLocation && (
                  <p className="text-red-600 text-[0.65rem] font-medium mt-1">
                    {errors.productionLocation}
                  </p>
                )}
              </div>

              <div>
                <div className="relative">
                  <input
                    type={passwordVisible ? "text" : "password"}
                    name="password"
                    placeholder="Create Password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full py-2 px-4 border-2 focus:border-slate-500 rounded bg-white text-zinc-800 text-sm outline-none transition-all duration-300"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute top-1/2 right-2 -translate-y-[50%] cursor-pointer"
                  >
                    {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-red-600 text-[0.65rem] font-medium mt-1">
                    {errors.password}
                  </p>
                )}
              </div>

              <div>
                <div className="relative">
                  <input
                    type={passwordVisible ? "text" : "password"}
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full py-2 px-4 border-2 focus:border-slate-500 rounded bg-white text-zinc-800 text-sm outline-none transition-all duration-300"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute top-1/2 right-2 -translate-y-[50%] cursor-pointer"
                  >
                    {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                  </button>
                  {errors.confirmPassword && (
                    <p className="text-red-600 text-[0.65rem] font-medium mt-1">
                      {errors.confirmPassword}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex justify-between gap-4 mt-4">
                <button
                  type="button"
                  className="bg-red-600 text-white py-2 px-4 rounded text-[0.8rem]"
                  onClick={() => navigate("/")}
                >
                  Quit
                </button>
                <button
                  type="submit"
                  className="bg-green-600 text-white py-2 px-4 rounded text-[0.8rem]"
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Signup;
