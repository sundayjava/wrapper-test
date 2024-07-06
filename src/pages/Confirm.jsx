import { Link } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";

const Confirm = () => {
  return (
    <div className="min-h-screen bg-blue-600 flex flex-col items-center justify-center text-white">
      {/* back to home container */}

      <div className="absolute top-4 left-4">
        <Link to="/" className="flex items-center gap-2 text-white">
          <FaAngleLeft className="text-2xl" />
          <span className="text-sm">Home</span>
        </Link>
      </div>

      <div className="p-6 text-center">
        <h2 className="text-xl font-bold mb-8">Are you a content creator</h2>

        <div className="flex gap-4 items-center justify-center text-[0.8rem]">
          <Link to="/error1" className="relative">
            <button className="bg-red-600 text-white font-bold py-2 px-4 rounded transition duration-300 hover:bg-red-700">
              No, I am not
            </button>
          </Link>
          <Link to="/wel" className="relative">
            <button className="bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-300 hover:bg-green-700">
              Yes, I am
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Confirm;
