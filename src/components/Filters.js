import React, {useContext, useRef} from 'react'
import Search from '../components/Search'
import submitIcon from "../assets/arrow.png"
import { CryptoContext } from './../context/CryptoContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateRight } from '@fortawesome/free-solid-svg-icons';

const Filters = () => {

  let {setCurrency, setSortBy, resetFunction} = useContext(CryptoContext);
  const currencyRef = useRef(null);

  const handleCurrencySubmit = (e) => {
    e.preventDefault();
    let val = currencyRef.current.value;
    setCurrency(val);
    currencyRef.current.value = "";
  }

  const handleSort = (e) => {
    e.preventDefault();
    let val = e.target.value;
    setSortBy(val);
  }

  return (
    <div className='w-full h-12 border-2 border-gray-100 rounded-lg
    flex items-center justify-between relative'>

        <Search />
        <div className='flex mr-7'>
          <form className='relative flex items-center font-nunito
          mr-[20rem]'
          onSubmit={handleCurrencySubmit}
          >
          <label htmlFor='currency'
          className='relative flex justify-center items-center mr-2 font-bold'
          >Currency : </label>
            <input type='text' name='currency'
            ref={currencyRef}
            placeholder="usd"
            className='w-16 rounded bg-gray-200 placeholder:text-gray-100 pl-2 required outline-0
            border border-transparent focus:border-yellow leading-4'
            />
            <button type='submit' className='ml-1 cursor-pointer'>
            <img src={submitIcon} alt='submit' className='w-5 h-5'/>
            </button>
          </form>

          <label className='relative flex justify-center items-center'>
            <span className='font-bold mr-2'>sort by : </span>
            <select name='sortby'
            className='rounded bg-gray-200 text-base
            pl-2 pr-10 py-1 leading-4 capitalize focus : outline-0
            '
            onClick={handleSort}
            >
              <option value="market_cap_desc">market cap desc</option>
              <option value="market_cap_asc">market cap asc</option>
              <option value="volume_desc">volume desc</option>
              <option value="volume_asc">volume asc</option>
              <option value="id_desc">id desc</option>
              <option value="id_asc">id asc</option>
              <option value="gecko_desc">gecko desc</option>
              <option value="gecko_asc">gecko asc</option>
            </select>
          </label>
          <button className='w-[2rem] ml-4 hover:scale-110 transition-all transition-ease
          absolute right-0 top-3
          ' onClick={resetFunction}>
          <FontAwesomeIcon className='text-yellow' icon = {faRotateRight} />
          </button>
          
        </div>
        <div>
        
        </div>
    </div>
  )
}

export default Filters