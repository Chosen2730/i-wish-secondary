import { useEffect } from "react";
import Page from "../components/page";
import Shared from "../components/shared";

const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <Shared>
      <div className='max-w-7xl sm:w-[90%] mx-auto px-4 sm:px-0'>
        <div className='max-w-7xl mx-auto'>
          <Page />
        </div>
      </div>
    </Shared>
  );
};

export default Home;
