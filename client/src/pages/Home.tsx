import React, { useEffect } from "react";
import Header from "../components/Header";
import { PlatformTable } from "../components/PlatformTable";
import { PriceIndex } from "../components/PriceIndex";
import { useAppDispatch, useAppSelector } from "../app/hook";
import { fetchMarketList } from "../features/market/marketAction";
import { fetchCurrecnyList } from "../features/currency/currencyAction";
import Loader from "../components/Loader";
const Home = (): JSX.Element => {
  const { isLoading } = useAppSelector((state) => state.market);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchCurrecnyList());
  }, [dispatch]);

  return (
    <React.Fragment>
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <PriceIndex />
          <PlatformTable />
          <button
            className="border-2 border-gray-100 shadow-slate-700 shadow-md p-2 m-2 hover:shadow-sm hover:bg-red-50 bg-blue-300"
            onClick={() => dispatch(fetchMarketList())}
          >
            GET ALL
          </button>
        </>
      )}

      {/* <button onClick={()=>dispatch(fetchCurrecnyList())}>fetch2</button> */}
    </React.Fragment>
  );
};

export default Home;
