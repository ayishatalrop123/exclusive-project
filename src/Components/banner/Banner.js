import React from 'react'
import './Banner.css'

import apple from '../Assets/Frame 563.png'
import arrow from '../Assets/Vector (1).svg'

const Banner = () => {
    return(
        <div className='banner'>
            <div className='wrapper'>
              <div className='banner-container'>
                    <div className='left'>
                            <ul>
                                <li className='apple'>
                                    <img src={apple} alt='apple'/>
                                </li>
                                <li>
                                    <h1>Up to 10%<br/>off voucher</h1>
                                </li>
                                <li>
                                    <a href='!anchor'>Shop Now <span><img src={arrow} alt='arrow'/></span></a>
                                </li>
                            </ul>
                    </div>
                    <div className='right'> </div>
                </div>
            </div>
        </div>
    )
}

export default Banner