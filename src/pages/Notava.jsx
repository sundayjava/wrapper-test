import { Link } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";

const Notava = () => {
  return (
    <div className="min-h-screen bg-blue-600 flex flex-col items-center justify-center text-white">
      {/* back to home container */}

      <div className="absolute top-4 left-4">
        <Link to="/" className="flex items-center gap-2 text-white">
          <FaAngleLeft className="text-2xl" />
          <span className="text-sm">Home</span>
        </Link>
      </div>

      <h2 className="">Sorry, can't create dashboard at this time</h2>
      <h3 className="text-sm">Redirecting to viewers page ........</h3>
    </div>
  );
};

export default Notava;
