import { Link } from "react-router-dom";
import { FcApproval } from "react-icons/fc";

const Success = () => {
  return (
    <>
      <div className='h-[100vh] flex justify-center items-center text-white'>
        <div className='w-full h-[100vh] overflow-hidden bg-blue-900 flex flex-col justify-center items-center'>
          <h2 className='mb-8'>PASSSWORD CHANGED</h2>
          <span>
            <FcApproval className='h-40 w-40' />
          </span>
          <h3 className='mt-8 text-white text-3xl'>
            BACK TO <Link to="/signin">LOGIN</Link>
          </h3>
        </div>
      </div>
    </>
  );
};

export default Success;
