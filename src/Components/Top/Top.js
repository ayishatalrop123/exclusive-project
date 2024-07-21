import React from 'react'
import './Top.css'

import arrow from '../Assets/DropDown.svg'

const Top = () => {
    return(
        <div className='top'>
            <div className='wrapper'>
                <div className='top-container'>
                    <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!<a href='!anchor'>ShopNow</a></p>
                    <div className='english'>
                        <h6>English</h6>
                        <span>
                            <img src={arrow} alt='arrow'/>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Top