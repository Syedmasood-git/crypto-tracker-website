import React, {useState, useEffect } from 'react'
import TabsComponent from '../Components/Dashboard/Tabs'
import axios from 'axios'

const DashboardPage = () => {
    const [coins,setCoins]=useState([])

    useEffect(()=>{
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&x_cg_demo_api_key=CG-P9pA4WokEwF3Rg1HNoAwBsHQ&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en')
        .then((response)=>{
            console.log(response.data);
            setCoins(response.data)})
        .catch((error)=>console.log(error,'error'))
    },[])
  return (
    <div>
      <TabsComponent coins={coins}/>
    </div>
  )
}

export default DashboardPage