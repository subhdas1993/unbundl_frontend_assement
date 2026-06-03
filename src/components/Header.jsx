import React from 'react'
import logo from '../assets/images/logo.png'
import phone from '../assets/images/contactimg.png'

function Header({headerRef}) {
  return (
    <div className='headerSection' ref={headerRef}>
      <div className='logoSection'>
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className='contactSection'>
        <button className="contactBtn">
            <span className="icon">
              <img src={phone} alt="Phone" />
            </span>

            <span className="phoneNumber">
              01169328350
            </span>
        </button>
      </div>
    </div>
  )
}

export default Header