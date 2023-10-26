import React from 'react'
import "./Footer.scss"
import LogoFooter from "../../assets/LOGO-footer.svg"

function Footer() {
  return (
    <div className='footer'>
      <div className='footer__content'>
        <img src={LogoFooter} alt="Logo de Kasa" className='footer__img' />
        <div className='footer__text'>
          <h3 className='footer__copyright'>
          © 2020 Kasa. All <span className='footer__copyright'>rights reserved</span>
          </h3>
        </div>
        </div>
    </div>
  )
}

export default Footer