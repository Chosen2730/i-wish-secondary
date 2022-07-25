import { useState } from "react";
import back from "../images/back.png";

const Details = ({ setPage, items }) => {
  const { img, title, price, colors, desc } = items;
  const disc = Math.trunc(+price / 30);
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
      <div className='grid gap-8 md:grid-cols-2'>
        <div>
          <div>
            <img
              src={img[0]}
              className='object-cover h-96 rounded-md w-full'
              alt={title}
            />
          </div>
        </div>
        <div className='lg:w-5/6'>
          <h4 className='font-bold text-sm capitalize'>
            Got an i-wish voucher? Use it below:
          </h4>
          <div className=' bg-gray-100 p-2 flex justify-between rounded-md my-3'>
            <input
              type='code'
              placeholder='Input voucher code'
              className='py-2 bg-transparent w-4/6'
            />
            <button
              className={`bg-[#7805A7] w-3/6 transition hover:bg-purple-900 hover:scale-105 px-6 text-xs rounded-lg text-purple-50 py-3`}
            >
              Use Voucher
            </button>
          </div>
          <h4 className='font-bold text-lg my-2 mt-3 capitalize'>
            Product Details
          </h4>
          <div className='flex justify-between'>
            <h4 className='font-bold text-sm my-1 capitalize'>Subtotal</h4>
            <h4 className='text-sm my-1 capitalize'>
              <del>N</del> {price}
            </h4>
          </div>
          <div className='flex justify-between'>
            <h4 className='font-bold text-sm my-1 capitalize'>Discount</h4>
            <h4 className='text-sm my-1 capitalize'>0%</h4>
          </div>
          <div className='flex justify-between'>
            <h4 className='font-bold text-sm my-1 capitalize'>Shipping</h4>
            <h4 className='text-sm my-1 capitalize'>
              <del>N</del> {disc}
            </h4>
          </div>
          <div className='flex justify-between'>
            <h4 className='font-bold text-sm my-1 capitalize'>Total Order</h4>
            <h4 className='text-sm my-1 capitalize'>
              <del>N</del> {+disc + +price}
            </h4>
          </div>

          <button
            className={`bg-[#7805A7] w-full transition hover:bg-purple-900 hover:scale-105 px-6 text-sm rounded-lg my-5 text-purple-50 font-semibold py-4`}
            onClick={() => setPage(4)}
          >
            Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
