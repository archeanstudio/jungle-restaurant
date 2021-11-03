import React from 'react'
import './Footer.css'

import { GrFacebookOption, GrTwitter, GrInstagram, GrMail, GrLinkedinOption } from "react-icons/gr";

const Footer = () => {
  return (
    <div className="footer-new">
      <div className="footer-new-left">
        <div className="footer-new-left-patchs">
          <a href="https://www.facebook.com/food2utas/">
            <GrInstagram className="footer-new-left-patchs-icon"/>
          </a>
          <a href="https://www.facebook.com/food2utas/">
            <GrFacebookOption className="footer-new-left-patchs-icon"/>
          </a>
          <a href="https://www.facebook.com/food2utas/">
            <GrTwitter className="footer-new-left-patchs-icon"/>
          </a>
          <a href="https://www.facebook.com/food2utas/">
            <GrLinkedinOption className="footer-new-left-patchs-icon"/>
          </a>
          <a href="mailto:junglehobart@gmail.com">
            <GrMail className="footer-new-left-patchs-icon"/>
          </a>
        </div>
      </div>
      <div className="footer-new-right">
        <div className="footer-new-right-text">
          Copyright © Archean Studio All Rights Reserved
        </div>
      </div>
    </div>
  )
}

export default Footer;