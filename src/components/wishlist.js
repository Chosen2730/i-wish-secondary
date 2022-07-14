import { useState } from "react";
import close from "../images/close.png";
import cart from "../images/cart.png";
import send from "../images/send.png";
import { store } from "../data";

const WishList = ({ setItems, setPage }) => {
  const [modal, setModal] = useState(false);
  return (
    <div className='py-10 sm:py-12 px-2'>
      <h1 className='text-3xl font-extrabold capitalize'>
        Ejoke’s Gaming wishlist
      </h1>
      <p className='text-base my-2'>
        This is where the description of the wishlist goes
      </p>
      <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-3'>
        {store.map(({ img, title, price, colors, desc }, i) => {
          return (
            <div
              key={i}
              className='flex flex-col xl:flex-row space-x-3 xl:items-center bg-gray-200 p-4 rounded-md'
            >
              <img
                src={img[0]}
                className='h-40 object-cover sm:h-32 w-full sm:w-full xl:w-32 sm:object-contain'
                alt=''
              />
              <div>
                <h5 className='font-bold text-sm my-2 text-center capitalize'>
                  {title}
                </h5>
                <button
                  className='py-3 px-6 my-4 rounded-lg bg-[#7805A7] text-sm text-white  w-full'
                  onClick={() => {
                    setModal(true);
                    setItems({ img, title, price, colors, desc });
                  }}
                >
                  Grant Wish
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div
        className={`${modal ? "modal" : "modal hider"} overflow text-gray-900`}
      >
        <div className='bg-white p-4 md:p-12 rounded-md w-[100%] sm:w-[80%] md:w-[65%]'>
          <img
            src={close}
            className='bg-[#7805A7] rounded-md p-2 ml-auto'
            alt=''
            onClick={() => setModal(false)}
          />
          <h1 className='text-center font-extrabold my-6 text-2xl'>
            Grant Wish
          </h1>
          <div className='grid grid-cols-2 gap-4 '>
            <div
              className='flex flex-col items-center rounded-md shadow-md p-3 cursor-pointer hover:scale-105 transition select-none'
              onClick={() => setPage(2)}
            >
              <img src={cart} className='p-2 bg-[#7805A7] rounded-md' alt='' />
              <h5 className='font-bold text-lg my-3'>i-Wish Store</h5>
              <p className='text-xs sm:text-sm'>
                Grant wish from the list of items from our wishlist store.
              </p>
            </div>
            <div
              className='flex flex-col items-center rounded-md shadow-md p-3 cursor-pointer hover:scale-105 transition select-none'
              onClick={() => setPage(6)}
            >
              <img src={send} className='p-2 bg-gray-200 rounded-md' alt='' />
              <h5 className='font-bold text-lg my-3'>Send money</h5>
              <p className='text-xs sm:text-sm'>
                Grant wish from the list of items from our wishlist store.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishList;
