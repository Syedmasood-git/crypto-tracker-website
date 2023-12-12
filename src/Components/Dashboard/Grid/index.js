import React from 'react'
import './style.css'
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';

const Grid = ({coin}) => {
  return (
    <div className={`grid-container ${coin.price_change_percentage_24h<0 && 'grid-container-red'}`}>
      <div className='info-flex'>
        <img src={coin.image} className='coin-logo' alt=''/>
        <div className='name-col'>
          <p className='coin-symbol'>{coin.symbol}</p>
          <p className='coin-name'>{coin.name}</p>
        </div>
      </div>
        {coin.price_change_percentage_24h>0?(<div className='chip-flex'>
          <div className='price-chip'>{coin.price_change_percentage_24h.toFixed(2)} %</div>
        <div className='icon-chip'><TrendingUpIcon/></div>
        </div>)
        :<div className='chip-flex'>
        <div className='price-chip chip-red'>{coin.price_change_percentage_24h.toFixed(2)} %</div>
        <div className='icon-chip chip-red'><TrendingDownIcon/></div>
      </div>}
      <div className='info-container'>
        <h3 className='coin-price' style={{color:coin.price_change_percentage_24h>0?'var(--green)':'var(--red)'}}>${coin.current_price.toLocaleString()}</h3>
      </div>
      <p className='total_volume'>Total Volume : ${coin.total_volume.toLocaleString()}</p>
      <p className='total_volume'>Market Cap : ${coin.market_cap.toLocaleString()}</p>
    </div>
  )
}

export default Grid
