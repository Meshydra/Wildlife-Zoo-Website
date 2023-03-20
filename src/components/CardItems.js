import React from 'react'
import {Link} from 'react-router-dom'

export default function CardItems() {
  return (
    <>
        <li className="cards_item">
            <Link className='cards__item__link'>
                <figure className='cards__item__pic-wrap'>
                    <img src="/" alt="Travel Image" className='cards__item__img'/>
                    
                    </figure>
                </Link>
            </li>
    </>
  )
}
