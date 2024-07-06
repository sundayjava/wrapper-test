import { TiTick } from "react-icons/ti";
import { Link } from "react-router-dom";

export default function SuccessRegister() {
  const style = { color: "#11ec30" };
  return (
    <div className="h-screen overflow-auto bg-[#00008b] text-white p-4 relative flex justify-center items-center flex-col gap-6">
      <h1 className="text-2xl text-[#11ec30]">Dashboard registration successful</h1>
      <TiTick size={50} style={style} />
      <h1 className="text-lg">A confirmation email has been sent to you</h1>
      <h1 className="text-sm hover:bg-slate-300 py-2 px-4 rounded-sm hover:text-black transition-all duration-300">
        <Link to="/">Proceed to Login</Link>
      </h1>
    </div>
  );
}
