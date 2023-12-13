import React from "react";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import "./style.css";
import { Tooltip } from "@mui/material";
import {convertNumbers} from '../../../functions/convertNumbers'

const List = ({ coin }) => {
  return (
    <tr className="list-row">
        <Tooltip title='Coin Logo' placement="bottom-start">
      <td className="td-image">
        <img src={coin.image} className="coin-logo" alt="" />
      </td>
      </Tooltip>
      <Tooltip title='Coin Info'placement="bottom-start">
      <td>
        <div className="name-col">
          <p className="coin-symbol">{coin.symbol}</p>
          <p className="coin-name">{coin.name}</p>
        </div>
      </td>
      </Tooltip>
      <Tooltip title='Price Change in 24hr'placement="bottom-start">
      {coin.price_change_percentage_24h > 0 ? (
        <td className="chip-flex chip-flex-mobile">
          <div className="price-chip price-chip-desktop">
            {coin.price_change_percentage_24h.toFixed(2)} %
          </div>
          <div className="icon-chip td-icon">
            <TrendingUpIcon />
          </div>
        </td>
        
      ) : (
        <td className="chip-flex chip-flex-mobile">
          <div className="price-chip price-chip-desktop chip-red">
            {coin.price_change_percentage_24h.toFixed(2)} %
          </div>
          <div className="icon-chip chip-red td-icon">
            <TrendingDownIcon />
          </div>
        </td>
      )}
      </Tooltip>
      <Tooltip title='Current Price'placement="bottom">
      <td>
        <h3
          className="coin-price td-center-align"
          style={{
            color:
              coin.price_change_percentage_24h > 0
                ? "var(--green)"
                : "var(--red)",
          }}
        >
          ${coin.current_price.toLocaleString()}
        </h3>
      </td>
      </Tooltip>
      <Tooltip title='Market Cap'placement="bottom">
      <td className="desktop-td-market">
      <p className="total_volume td-right-align">
          ${coin.market_cap.toLocaleString()}
        </p>
      </td>
      </Tooltip>
      <Tooltip title='Market Cap'placement="bottom">
      <td className="mobile-td-market">
      <p className="total_volume td-right-align">
          ${convertNumbers(coin.market_cap)}
        </p>
      </td>
      </Tooltip>
      <Tooltip title='Total Volume'placement="bottom">
      <td>
        <p className="total_volume td-right-align td-volume">
          ${coin.total_volume.toLocaleString()}
        </p>
      </td>
      </Tooltip>
    </tr>
  );
};

export default List;
