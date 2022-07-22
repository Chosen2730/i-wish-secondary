import React from "react";
import twitter from "../images/twitter.png";
import youtube from "../images/youtube.png";
import ig from "../images/ig.png";
import tik from "../images/tik.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className='overflow-hidden'>
      <div>
        <div className='flex space-x-8 items-center justify-center my-10 cursor-pointer'>
          <a href='https://vm.tiktok.com/ZMN5PGyRv/'>
            <img src={tik} alt='' className='w-6' />{" "}
          </a>
          <a href='https://twitter.com/iwish__app?s=21&t=GG38Ldi9IcSnetVGazTBBA'>
            <img src={twitter} alt='' className='w-6' />
          </a>
          <a href='https://www.instagram.com/iwish_app/'>
            <img src={ig} alt='' className='w-6' />
          </a>
          <a href='https://www.youtube.com/'>
            <img src={youtube} alt='' className='w-6' />
          </a>
        </div>

        <div className='flex justify-center capitalize gap-4 my-10 text-xs md:text-base font-bold text-gray-900 '>
          <Link to='/faq'>Faq</Link>
          <Link to='/privacy'>Privacy</Link>
          <Link to='/contact'>Contact us</Link>
          <Link to='/terms'>Terms</Link>
          <Link to='/vendor'>become a vendor</Link>
        </div>
      </div>

      <p className='text-center text-xs md:text-base my-4'>
        {" "}
        &copy; {new Date().getFullYear()} i-wish Mobile App
      </p>
    </div>
  );
};

export default Footer;
