import { useState } from "react";
import back from "../images/back.png";

const SendMoney = ({ setPage, items }) => {
  const { img, title, price, colors, desc } = items;
  const [amount, setAmount] = useState(500);

  return (
    <div>
      <div
        className='select-none cursor-pointer flex items-center space-x-4'
        onClick={() => setPage(1)}
      >
        <img src={back} alt='' className='w-3' />
        <h4 className='text-sm'>Back to Wishlist</h4>
      </div>
      <h2 className='font-bold text-3xl text-gray-800 my-6'>
        Send Money to Ejoke
      </h2>
      <div className='grid gap-8 md:grid-cols-2'>
        <div>
          <div>
            <img
              src={img[0]}
              className='object-cover h-96 rounded-md w-full'
              alt={title}
            />
          </div>
          <div className='mt-5'>
            <h4 className='font-bold text-2xl capitalize'>{title}</h4>
            <h4 className='font-bold text-lg my-1 capitalize'>
              <del>N</del> {price}
            </h4>
            <h4 className='font-bold text-lg my-2 mt-3 capitalize'>
              Product Description
            </h4>
            <h4 className='text-sm'>{desc}</h4>
          </div>
        </div>
        <div>
          <h4 className='text-base my-2 mt-3 capitalize text-center'>
            How Much do you want to send?
          </h4>
          <div className='flex items-center justify-center space-x-4 border-2 rounded-lg w-fit mx-auto p-2 px-8 border-gray-400 select-none'>
            <h4
              className='text-xl cursor-pointer p-2 rounded-md'
              onClick={() => setAmount(amount - 200)}
            >
              -
            </h4>
            <h4 className='text-xl'>{amount}.00</h4>
            <h4
              className='text-xl cursor-pointer p-2 rounded-md'
              onClick={() => setAmount(amount + 500)}
            >
              +
            </h4>
          </div>
          <div className='flex items-center space-x-4 my-8'>
            <hr className='border-1 border-gray-400 w-full' />
            <h4>or</h4>
            <hr className='border-1 border-gray-400 w-full' />
          </div>
          <div className='grid grid-cols-5 gap-4'>
            <h4
              className='text-xs sm:text-xl cursor-pointer border-2 rounded-lg flex flex-col items-center justify-center p-2 sm:px-8 border-gray-400 select-none'
              onClick={() => setAmount(+price * 0.1)}
            >
              10%
            </h4>
            <h4
              className='text-xs sm:text-xl cursor-pointer border-2 rounded-lg flex flex-col items-center justify-center p-2 sm:px-8 border-gray-400 select-none'
              onClick={() => setAmount(+price * 0.2)}
            >
              20%
            </h4>
            <h4
              className='text-xs sm:text-xl cursor-pointer border-2 rounded-lg flex flex-col items-center justify-center p-2 sm:px-8 border-gray-400 select-none'
              onClick={() => setAmount(+price * 0.5)}
            >
              50%
            </h4>
            <h4
              className='text-xs sm:text-xl cursor-pointer border-2 rounded-lg flex flex-col items-center justify-center p-2 sm:px-8 border-gray-400 select-none'
              onClick={() => setAmount(+price * 0.7)}
            >
              70%
            </h4>
            <h4
              className='text-xs sm:text-xl cursor-pointer border-2 rounded-lg flex flex-col items-center justify-center p-2 sm:px-8 border-gray-400 select-none'
              onClick={() => setAmount(+price * 1)}
            >
              100%
            </h4>
          </div>
          <div className='my-4'>
            <label htmlFor='desc'>Description (option)</label>
            <input
              type='text'
              className='block w-full p-3 bg-gray-100 rounded-md'
            />
          </div>
          <button
            className={`bg-[#7805A7] w-full transition hover:bg-purple-900 hover:scale-105 px-6 text-sm rounded-lg my-5 text-purple-50 font-semibold py-4`}
            onClick={() => setPage(4)}
          >
            Send Money
          </button>
        </div>
      </div>
    </div>
  );
};

export default SendMoney;
