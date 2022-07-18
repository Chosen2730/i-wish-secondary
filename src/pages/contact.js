import { useEffect } from "react";
import mail from "../images/mail.png";
import Shared from "../components/shared";
// import call from "../images/call.png";
// import venue from "../images/venue.png";

const Contact = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <Shared>
      <div className='max-w-7xl sm:w-[90%] mx-auto px-4 sm:px-0 py-8'>
        <div className='my-10 text-center gray-800 w-[90%] sm:w-[75%] mx-auto'>
          <h1 className='font-bold text-5xl'>Contact Us</h1>
          <p className='text-base my-2'>
            Want to get in touch or have any enquiry to make?
          </p>
        </div>
        <div className='grid md:grid-cols-2 p-6 sm:p-12 shadow-md border-2 border-gray-50 text-gray-800 w-[95%] sm:w-[75%] mx-auto gap-4 gap-y-8'>
          <div>
            <h1 className='text-xl font-bold my-2'>Contact us</h1>
            {/* <div className='flex space-x-4 items-start my-4'>
            <img src={venue} className='w-5' alt='' />
            <h2 className='text-sm sm:text-base'>
              1018 Riddle Hill Hwy, Little Rock, <br /> Arkansas, 40401
            </h2>
          </div> */}
            <div className='flex space-x-4 items-center my-4'>
              <img src={mail} className='w-5' alt='' />
              <h2 className='text-sm sm:text-base'>hello@iwish.ng</h2>
            </div>
            {/* <div className='flex space-x-4 items-center my-4'>
            <img src={call} className='w-5' alt='' />
            <h2 className='text-sm sm:text-base'>+234 123 45666</h2>
          </div> */}
          </div>
          <div>
            <h1 className='text-xl my-2 font-extrabold'>
              Get in tough directly
            </h1>
            <form action='' onSubmit={(e) => e.preventDefault()}>
              <label htmlFor='name' className='my-2 block text-base'>
                Name
              </label>
              <input
                type='text'
                id='name'
                placeholder='Input your name'
                className='p-4 bg-gray-50 text-sm text-gray-400 rounded-md block w-full font-thin mb-4'
              />
              <label htmlFor='email' className='my-2 block text-base'>
                Email
              </label>
              <input
                type='email'
                id='email'
                placeholder='Input your name'
                className='p-4 bg-gray-50 text-sm text-gray-400 rounded-md block w-full font-thin mb-4'
              />
              <label htmlFor='message' className='my-2 block text-base'>
                Message
              </label>
              <textarea
                name=''
                id=''
                cols='30'
                rows='10'
                placeholder='Input your message here'
                className='p-4 bg-gray-50 text-sm text-gray-400 rounded-md block w-full font-thin mb-4'
              />
              <input
                type='submit'
                value='Send Message'
                placeholder='Input your name'
                className='p-4  bg-[#7805A7] text-sm text-gray-100 rounded-md block w-full font-thin mb-4'
              />
            </form>
          </div>
        </div>
      </div>
    </Shared>
  );
};

export default Contact;
