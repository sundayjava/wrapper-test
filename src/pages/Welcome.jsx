import { Link } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";

const Welcome = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-600 text-white">
      <div className="absolute top-4 left-4">
        <Link to="/" className="flex items-center gap-2 text-white">
          <FaAngleLeft className="text-2xl" />
          <span className="text-sm">Home</span>
        </Link>
      </div>

      <div className="max-w-md w-full p-6 text-center">
        <h1 className="text-2xl tracking-widest font-bold text-green-500 mb-4">WELCOME</h1>
        <p className="text-sm font-semibold mb-8">Proceed to SIGN UP</p>
        <Link to="/signup">
          <button className="bg-green-500 text-black font-bold py-2 px-8 rounded transition duration-300 hover:bg-green-600 mx-auto block">
            Sign up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
