import { useState, useEffect } from "react";
import plus from "../images/plus.png";
import minus from "../images/minus.png";

const SingleFaq = ({ question, index }) => {
  const [ans, setAns] = useState(false);
  const [base, setBase] = useState(0);
  const image = ans ? minus : plus;
  const { a, q } = question;

  return (
    <div className='my-5'>
      <div className='flex items-center justify-between'>
        <h4 className='my-2 font-semibold text-base sm:text-lg'>{q}?</h4>
        <img
          src={image}
          className='w-10 p-3'
          alt=''
          onClick={() => {
            setBase(index);
            setAns(!ans);
          }}
        />
      </div>
      {ans && <p className='text-sm sm:text-base my-2'>{a}</p>}
    </div>
  );
};

export default SingleFaq;
