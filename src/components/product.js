import { useState } from "react";
import back from "../images/back.png";

const Product = ({ setPage, items }) => {
  const { img, title, price, colors, desc } = items;
  const [image, setImage] = useState(img[0]);
  return (
    <div>
      <div
        className='select-none cursor-pointer flex items-center space-x-4'
        onClick={() => setPage(1)}
      >
        <img src={back} alt='' />
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
        <div>
          <h4 className='font-bold text-2xl capitalize'>{title}</h4>
          <h4 className='font-bold text-lg my-1 capitalize'>
            <del>N</del> {price}
          </h4>
          <h4 className='font-bold text-lg my-2 mt-3 capitalize'>
            Product Description
          </h4>
          <h4 className='text-sm'>{desc}</h4>
          <h4 className='font-bold text-lg my-2 mt-3 capitalize'>
            Available Colors
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
            className={`bg-[#7805A7] w-1/2 transition hover:bg-purple-900 hover:scale-105 px-6 text-sm rounded-lg my-5 text-purple-50 font-semibold py-4`}
            onClick={() => setPage(3)}
          >
            Grant wish
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
