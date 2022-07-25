import { useState } from "react";
import WishList from "./wishlist";
import Product from "./product";
import Details from "./details";
import Payment from "./payment";
import Success from "./success";
import SendMoney from "./sendMoney";

const Page = () => {
  const [page, setPage] = useState(1);
  const [items, setItems] = useState({});
  return (
    <div className='shadow-md border-2 border-gray-50 p-4 sm:p-12 mx-auto my-2 sm:my-10 bg-white'>
      {page === 1 && <WishList setPage={setPage} setItems={setItems} />}
      {page === 2 && <Product setPage={setPage} items={items} />}
      {page === 3 && <Details setPage={setPage} items={items} />}
      {page === 4 && <Payment setPage={setPage} items={items} />}
      {page === 5 && <Success setPage={setPage} items={items} />}
      {page === 6 && <SendMoney setPage={setPage} items={items} />}
    </div>
  );
};

export default Page;
