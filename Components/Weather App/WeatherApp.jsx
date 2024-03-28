import React from 'react'
import './WeatherApp.css'

import search_icon from '../Assets/search.png'

const WeatherApp = () => {
  return (
    <div className='main-container'>
      <div className='search'>
        <input type='text' placeholder='Search' />
        <div className='search-icon'>
          <img src={search_icon} alt='' />
        </div>
      </div>

      
      
    </div>
  )
}

export default WeatherApp
