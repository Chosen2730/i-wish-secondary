import { useState } from "react";
import back from "../images/back.png";
import { store } from "../data";

const Product = ({ setPage, items }) => {
  const { img, title, price, colors, desc } = items;
  const [image, setImage] = useState(img[0]);
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
              src={image}
              className='object-cover h-96 rounded-md w-full'
              alt={title}
            />
          </div>
          <div className='flex space-x-4 justify-center my-4'>
            {img.map((newImg, i) => {
              return (
                <img
                  src={newImg}
                  className='w-12 rounded-md'
                  key={i}
                  alt='image'
                  onClick={() => setImage(img[i])}
                />
              );
            })}
          </div>
        </div>
        <div className='md:w-[75%]'>
          <h4 className='font-bold text-2xl capitalize'>{title}</h4>
          <h4 className='font-bold text-lg my-1 capitalize'>
            <del>N</del> {price}
          </h4>
          <h4 className='font-bold text-lg my-2 mt-3 capitalize'>
            Product Description
          </h4>
          <h4 className='text-sm'>{desc}</h4>
          <h4 className='font-bold text-lg my-2 mt-3 capitalize'>
            Available Colors.
          </h4>
          <div className='grid grid-cols-4 sm:grid-cols-3 lg:grid-cols-4 items-center gap-4 my-3'>
            {colors.map((color, i) => {
              return (
                <h4
                  className='border-2 border-purple-500 rounded-lg bg-white py-2 text-center capitalize text-xs'
                  key={i}
                >
                  {color}
                </h4>
              );
            })}
          </div>
          <button
            className={`bg-[#7805A7] w-full transition hover:bg-purple-900 hover:scale-105 px-6 text-sm rounded-lg my-5 text-purple-50 font-semibold py-4`}
            onClick={() => setPage(3)}
          >
            Grant wish
          </button>
        </div>
      </div>
      <h2 className='font-bold text-2xl my-3 mt-10'>Similar Products</h2>
      <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-4'>
        {store.map(({ img, title, price, colors, desc }, i) => {
          return (
            <div key={i} className='flex flex-col bg-gray-200 rounded-md'>
              <img src={img[0]} className='h-40 object-cover w-full' alt='' />
              <div className='p-2'>
                <h5 className='font-bold text-sm my-2 capitalize'>{title}</h5>
                <h5 className='font-extrabold text-lg my-2 capitalize'>
                  <del>N</del> {price}
                </h5>
                <button
                  className='py-3 px-6 my-4 rounded-lg bg-[#7805A7] text-sm text-white  w-full'
                  onClick={() => {
                    // setModal(true);
                    // setItems({ img, title, price, colors, desc });
                  }}
                >
                  Grant Wish
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Product;
