import React, {useState, useEffect } from 'react'
import TabsComponent from '../Components/Dashboard/Tabs'
import axios from 'axios'
import Search from '../Components/Dashboard/Search'
import PaginationComponent from '../Components/Dashboard/Pagination'

const DashboardPage = () => {
    const [coins,setCoins]=useState([])
    const [search,setSearch]=useState('')
    
    const onSearchChange=(e)=>{
      setSearch(e.target.value)
    }
    let filteredCoins=coins.filter((item)=>item.name.toLowerCase().includes(search.toLowerCase()) ||item.symbol.toLowerCase().includes(search.toLowerCase() ))

    useEffect(()=>{
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&x_cg_demo_api_key=CG-P9pA4WokEwF3Rg1HNoAwBsHQ&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en')
        .then((response)=>{
            console.log(response.data);
            setCoins(response.data)})
        .catch((error)=>console.log(error,'error'))
    },[])
  return (
    <div>
      <Search search={search} onSearchChange={onSearchChange}/>
      <TabsComponent coins={filteredCoins}/>
      <PaginationComponent/>
    </div>
  )
}

export default DashboardPage