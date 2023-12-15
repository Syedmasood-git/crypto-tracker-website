import React, { useEffect, useState } from "react";
import Header from "../Components/Common/Header";
import SelectCoins from "../Components/Compare/SelectCoins";
import SelectDays from "../Components/Coin/SelectDays";
import { coinObject } from "../functions/coinObject";
import { getCoinData } from "../functions/getCoinData";
import { settingChartData } from "../functions/settingChartData";
import { getCoinPrices } from "../functions/getCoinPrices";
import Loader from "../Components/Common/Loader";
import List from "../Components/Dashboard/List";
import CoinInfo from "../Components/Coin/CoinInfo";
import LineChart from "../Components/Coin/LineChart";

const Compare = () => {
  const [crypto1, setCrypto1] = useState("bitcoin");
  const [crypto2, setCrypto2] = useState("ethereum");
  const [crypto1Data, setCrypto1Data] = useState({});
  const [crypto2Data, setCrypto2Data] = useState({});
  const [days, setDays] = useState(30);
  const [isLoading, setIsLoading] = useState(true);
  const [priceType, setPriceType] = useState("prices");
  const [chartData,setChartData]=useState({})

  function handleDaysChange(e) {
    setDays(e.target.value);
  }

  
  
  useEffect(() => {
    getData();
  }, []);
  
  
  async function getData() {
    setIsLoading(true);
    const data1 = await getCoinData(crypto1);
    const data2 = await getCoinData(crypto2);
    if (data1) {
      coinObject(setCrypto1Data, data1);
    }
    if (data2) {
      coinObject(setCrypto2Data, data2);
    }
    if (data1 && data2) {
      const prices1 = await getCoinPrices(crypto1, days, priceType);
      const prices2 = await getCoinPrices(crypto2, days, priceType);
      settingChartData(setChartData,prices1,prices2)
      console.log(prices1,prices2)
      if (prices1.length > 0 && prices2.length > 0) {
        console.log('Both prices fetched',prices1,prices2)
        setIsLoading(false);
      }
    }
  }
  
  const handleCoinChange = async (e, isCoin2) => {
    setIsLoading(true);
    if (isCoin2) {
      setCrypto2(e.target.value);
      const data = await getCoinData(e.target.value);
      coinObject(setCrypto2Data, data);
      const prices1 = await getCoinPrices(crypto1, days, priceType);
    const prices2 = await getCoinPrices(crypto2, days, priceType);
    if (prices1.length > 0 && prices2.length > 0) {
      console.log('Both prices fetched',prices1,prices2)
      setIsLoading(false);
    }
    } else {
      setCrypto1(e.target.value);
      const data = await getCoinData(e.target.value);
      coinObject(setCrypto1Data, data);
    }
    
  };

  return (
    <div>
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="coin-days-flex">
            <SelectCoins
              crypto1={crypto1}
              crypto2={crypto2}
              handleCoinChange={handleCoinChange}
            />
            <SelectDays
              noPTag={true}
              days={days}
              handleDaysChange={handleDaysChange}
            />
          </div>
          <div className="grey-wrapper">
            <List coin={crypto1Data} />
          </div>
          <div className="grey-wrapper">
            <List coin={crypto2Data} />
          </div>
          <div className="grey-wrapper">
            <LineChart chartData={chartData} priceType={'prices'} />
          </div>
          <CoinInfo heading={crypto1Data.name} desc={crypto1Data.desc} />
          <CoinInfo heading={crypto2Data.name} desc={crypto2Data.desc} />
        </>
      )}
    </div>
  );
};

export default Compare;
