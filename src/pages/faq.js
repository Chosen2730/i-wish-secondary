import { useEffect } from "react";
import search from "../images/search.png";
import SingleFaq from "../components/singleFaq";
import { questions } from "../data";
import Shared from "../components/shared";

const FAQ = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <Shared>
      <div className='max-w-7xl sm:w-[90%] mx-auto px-4 sm:px-0 py-8'>
        <div className='my-10 text-center gray-800 w-[95%] sm:w-[75%] mx-auto'>
          <h1 className='font-bold text-5xl'>Frequently Asked Questions</h1>
          <p className='text-base my-2'>
            Questions we often get asked by users. You can search for any
            question using the search field below
          </p>
          <div className='w-[90%] sm:w-[70%] mx-auto flex items-center space-x-2  bg-gray-100 p-2 rounded-lg'>
            <input
              type='text'
              placeholder='Search for keyword questions'
              className='p-3 text-sm bg-transparent text-gray-400 rounded-md block w-full font-thin'
            />
            <img src={search} className='bg-[#7805A7] p-3 rounded-md' alt='' />
          </div>
        </div>
        <div className='p-6 sm:p-12 shadow-md border-2 border-gray-50 text-gray-800 w-[95%] sm:w-[75%] mx-auto gap-4 gap-y-8'>
          {questions.map((question, i) => {
            return <SingleFaq index={i} question={question} key={i} />;
          })}
        </div>
      </div>
    </Shared>
  );
};

export default FAQ;
