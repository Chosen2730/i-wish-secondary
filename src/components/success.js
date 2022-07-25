import back from "../images/back.png";
import star from "../images/star.svg";

const Success = ({ setPage }) => {
  return (
    <div>
      <div
        className='select-none cursor-pointer flex items-center space-x-4'
        onClick={() => setPage(1)}
      >
        <img src={back} alt='' className='w-3' />
        <h4 className='text-sm'>Back to Wishlist</h4>
      </div>
      <h2 className='font-bold text-3xl text-gray-800 my-6'>i-Wish Store</h2>

      <div className='flex flex-col justify-center items-center mt-20'>
        <img src={star} className='p-8 rounded-lg' alt='' />

        <h2 className='font-bold my-3 capitalize text-xl'>
          Transaction successful
        </h2>
        <h4 className='text-sm'>Wishlist item has been successfully granted</h4>
        <button
          className={`bg-[#7805A7] w-fit transition hover:bg-purple-900 hover:scale-105 text-sm rounded-lg my-5 text-purple-50 py-4 px-8`}
          onClick={() => setPage(1)}
        >
          Go back to wishlist
        </button>
        <h2 className='text-sm text-[#7805A7] font-bold'>
          Create your Wishlist
        </h2>
      </div>
    </div>
  );
};

export default Success;
