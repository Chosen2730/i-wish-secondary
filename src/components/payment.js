import back from "../images/back.png";
import pay from "../images/pay.png";
import paystack from "../images/paystack.png";
import paystack2 from "../images/paystack2.png";

const Payment = ({ setPage, items }) => {
  const { img, title, price } = items;
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
            <h4 className='font-bold text-sm capitalize mt-7'>
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
            <h4 className='font-bold text-lg my-2 mt-8 capitalize'>
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
          </div>
        </div>
        <div className='lg:w-5/6'>
          <h2 className='font-bold text-3xl text-gray-800 my-2'>Checkout</h2>
          <h2 className='font-bold text-lg text-gray-800 '>Payment Method</h2>
          <div className='flex items-center space-x-4 bg-gradient-to-r from-[#7805A7] via-purple-900 to-purple-600 my-8 mt-10 p-4 text-gray-50 rounded-md'>
            <img src={pay} alt='card' className='w-5' />
            <h3>Use i-Wish Wallet</h3>
          </div>
          <div className='flex bg-gradient-to-r from-blue-600 via-blue-700 to-blue-400 items-center space-x-4 my-3 p-4 text-gray-50 rounded-md'>
            <img src={paystack} alt='card' className='w-5' />
            <img src={paystack2} alt='card' className='w-24' />
          </div>
          <div className='flex items-center space-x-4 my-12'>
            <hr className='border-1 border-gray-400 w-full' />
            <h4>or</h4>
            <hr className='border-1 border-gray-400 w-full' />
          </div>
          <label htmlFor='number' className='my-2 block'>
            Card Number
          </label>
          <input
            type='number'
            className='block w-full p-3 bg-gray-100 rounded-md'
          />
          <div className='grid grid-cols-2 gap-3 my-8'>
            <div>
              <label htmlFor='number' className='my-2 block'>
                Exp Date
              </label>
              <input
                type='text'
                className='block w-full p-3 bg-gray-100 rounded-md'
              />
            </div>
            <div>
              <label htmlFor='number' className='my-2 block'>
                CVV
              </label>
              <input
                type='number'
                className='block w-full p-3 bg-gray-100 rounded-md'
              />
            </div>
          </div>
          <button
            className={`bg-[#7805A7] w-full transition hover:bg-purple-900 hover:scale-105 px-6 text-sm rounded-lg my-5 text-purple-50 font-semibold py-4`}
            onClick={() => setPage(5)}
          >
            Make Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
