import { useEffect } from "react";
import { Link } from "react-router-dom";

const Error = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <div className='min-h-[80vh] flex flex-col justify-center items-center'>
      <h4 className='font-bold text-3xl sm:text-5xl text-center'>
        404 | Page Not Found
      </h4>
      <Link to='/'>
        <button className='py-3 px-6 my-4 rounded-lg bg-[#7805A7] text-sm text-white  w-fit'>
          Back Home
        </button>
      </Link>
    </div>
  );
};

export default Error;
