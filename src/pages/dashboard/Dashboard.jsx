import React, { useEffect } from "react";
import {
  FaCoins,
  FaFileInvoiceDollar,
  FaHome,
  FaUpload,
  FaWallet,
} from "react-icons/fa";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./dashboard.css";

const Dashboard = () => {
  const data = [
    {
      name: "Jan",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Feb",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "March",
      uv: 2000,
      pv: 5100,
      amt: 2290,
    },
    {
      name: "April",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "May",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Jun",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Jul",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Aug",
      uv: 3490,
      pv: 4300,
      amt: 5100,
    },
    {
      name: "Sep",
      uv: 3490,
      pv: 4300,
      amt: 2040,
    },
    {
      name: "Oct",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Nov",
      uv: 3490,
      pv: 4300,
      amt: 2000,
    },
    {
      name: "Dec",
      uv: 3190,
      pv: 4300,
      amt: 1100,
    },
  ];

  //   useEffect(()=>{
  //     const getApi = axios.get("https://new-naija-prime-backend-repo-for-viewers-bqbq.onrender.com/api")

  //     getApi()
  //   })

  return (
    <div className="w-[85%]">
      <div className="flex flex-col items-center justify-center w-full">
        <div className="flex flex-wrap justify-between w-full">
          <div className="border border-gray-300 w-[30%] h-24 rounded-lg flex items-center justify-between px-10 text-white bg-opacity-75 bg-gray-900">
            <FaCoins className="text-5xl text-green-400 opacity-60" />
            <div>
              <h3 className="text-[18px] font-[500]">Total Revenue</h3>
              <span className="flex gap-2 justify-end text-[20px] leading-5 font-[700]">
                <p>NGN</p>
                <p>5796</p>
              </span>
            </div>
          </div>

          <div className="border border-gray-300 w-[30%] h-24 rounded-lg flex items-center justify-between px-10 text-white bg-opacity-15 bg-purple-400">
            <FaFileInvoiceDollar className="text-5xl text-red-400 opacity-60" />
            <div>
              <h3 className="text-[18px] font-[500]">Total Content View</h3>
              <p className="text-right mt-2 text-[20px] leading-5 font-[700]">
                322
              </p>
            </div>
          </div>

          <div className="border border-gray-300 w-[30%] h-24 rounded-lg flex items-center justify-between px-6 text-white bg-opacity-75 bg-gray-600">
            <FaWallet className="text-5xl text-orange-400 opacity-60" />
            <div>
              <h3 className="text-[18px] font-[500]">Total Content Uploaded</h3>
              <p className="text-right mt-2 text-[20px] leading-5 font-[700]">
                444
              </p>
            </div>
          </div>
        </div>

        <div className="w-[69vw] h-[250px] bg-black mt-8 pt-8 pb-2 pl-8 pr-20 rounded-lg">
          <div className="flex justify-between items-center mb-5 mx-8">
            <h1 className="text-white/60 text-[18px] font-[700]">
              Total Revenue
            </h1>
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-600 rounded-full font-[300]" />
                <span className="text-[12px] text-white/55">2920</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-red-600 rounded-full font-[300]" />
                <span className="text-[12px] text-white/55">2920</span>
              </div>
            </div>
          </div>
          <ResponsiveContainer width="100%" height="80%">
            <LineChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" horizontal={false}/>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="w-full text-white bg-transparent">
          <h4 className="font-[700] mb-4 mt-5">Recently Uploaded</h4>
          <div className="">
            <table
              className="w-full text-center border-separate"
              style={{ borderSpacing: "0 5px" }}
            >
              <thead>
                <tr>
                  <th className="">VIDEO</th>
                  <th className="">TITLE</th>
                  <th className="">UPLOADED DATE</th>
                  <th className="">VIEWS</th>
                  <th className="">REVENUE</th>
                </tr>
              </thead>
              <tbody className="">
                <tr className="bg-white/10">
                  <td className="py-2">hkgk</td>
                  <td className="py-2">jkgbkjbj</td>
                  <td className="py-2">gbgnfhn</td>
                  <td className="py-2">egfnhhnf</td>
                  <td className="py-2">frewwgbwg</td>
                </tr>
                <tr className="bg-white/10 mt-2">
                  <td className="py-2">hkgk</td>
                  <td className="py-2">jkgbkjbj</td>
                  <td className="py-2">gbgnfhn</td>
                  <td className="py-2">egfnhhnf</td>
                  <td className="py-2">frewwgbwg</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="absolute bottom-0 bg-green-800 text-white font-[500] text-[14px] px-2 py-[2px] rounded-md">
          <button>Customer care</button>
        </div>

        <div className="absolute bottom-6 right-52">
          <button
            type="submit"
            className="p-1 font-[700] text-white bg-transparent border-2 border-gray-300 rounded-full flex justify-center items-center gap-2"
          >
            <FaUpload className="p-2 bg-orange-500 text-3xl rounded-full" />
            UPLOAD
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
