import { useNavigate } from "react-router-dom";
import { TiTick } from "react-icons/ti";

export default function Success() {
  const navigate = useNavigate();

  const handleNextClick = () => {
    navigate("/register");
  };

  const style = { color: "#11ec30" };

  return (
    <div className="min-h-screen bg-[#00008b] flex flex-col items-center justify-center">
      <h1 className="text-2xl text-[#11ec30]">Verification Successful</h1>
      <TiTick size={80} style={style} />
      <button className="px-[35px] py-2 text-sm inline-block mt-4 bg-[#11ec30]" onClick={handleNextClick}>
        NEXT
      </button>
    </div>
  );
}
