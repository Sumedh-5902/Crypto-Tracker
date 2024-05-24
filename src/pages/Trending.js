import { data } from 'autoprefixer';
import React, { useContext } from 'react'
import { TrendingContext } from '../context/TrendingContext'
import TrendingCoin from '../components/TrendingCoin';
import { Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateRight } from '@fortawesome/free-solid-svg-icons';


// creating a trending page 
const Trending = () => {

  const {trendData, resetTrendingResult} = useContext(TrendingContext);

  return (
    <section
    className='w-[80%] h-full flex flex-col mt-16 mb-24 relative'
    >
      <div className="w-full min-h-[60vh] py-8 flex flex-wrap justify-evenly border border-gray-100 rounded-sm">
      {
        trendData && trendData.map(coin => 
          <TrendingCoin key={data.coin_id} data={coin.item} />
          )
      }
      <button className='w-[2rem] ml-4 hover:scale-110 transition-all transition-ease
          absolute right-0 -top-10
          ' onClick={resetTrendingResult}>
          <FontAwesomeIcon className='text-yellow' icon = {faRotateRight} />
        </button>
      </div>
      <Outlet />
    </section>
  )
}

export default Trending