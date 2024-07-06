import { useState } from "react";
import toast from "react-hot-toast";
import { Oval } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../api/axios";

const Register = ({ registrationData }) => {
  const [holder, setHolder] = useState("");
  const [bank, setBank] = useState("");
  const [account, setAccount] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const axios = axiosInstance;

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    await axios
      .post("content-creators/register", {
        ...registrationData,
        accountDetails: {
          accountHolder: holder,
          bankName: bank,
          accountNumber: account,
        },
      })
      .then((_) => {
        toast("Account created successfully");
        navigate("/success-register")
      })
      .catch((error) => {
        toast(error.response.data || "An error occurred, try again later");
      });

    setIsLoading(false);
  };

  return (
    <div className="flex items-center justify-center bg-blue-600 p-4">
      <div className="bg-blue-700 p-6 rounded-lg shadow-md">
        <h2 className="text-white text-center text-xl font-bold mb-6">
          Please input your account details
        </h2>

        <form method="post" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="text-white mb-1 text-sm" htmlFor="holder">
                Account Holder
              </label>
              <input
                type="text"
                id="holder"
                name=""
                required
                value={holder}
                onChange={(e) => setHolder(e.target.value)}
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
                value={bank}
                onChange={(e) => setBank(e.target.value)}
                className="w-full py-2 px-4 rounded inline-block outline-none border-2 focus:border-slate-500 transition-all duration-300 mt-1"
              />
            </div>

            <div>
              <label className="text-white mb-1 text-sm" htmlFor="account">
                Account Number
              </label>
              <input
                type="text"
                id="account"
                name=""
                required
                value={account}
                onChange={(e) => setAccount(e.target.value)}
                className="w-full py-2 px-4 rounded inline-block outline-none border-2 focus:border-slate-500 transition-all duration-300 mt-1"
              />
            </div>

            <button
              className="w-full bg-green-500 text-black font-bold py-2 flex items-center justify-center rounded"
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
                "Create account"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
