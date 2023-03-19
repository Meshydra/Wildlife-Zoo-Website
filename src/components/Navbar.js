import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to ="/" className='navbar-logo'>
                        <p>WildLife a</p> 
                    </Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar
