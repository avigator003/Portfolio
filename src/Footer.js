import React from 'react'
import "./Footer.css"
import AnchorLink from 'react-anchor-link-smooth-scroll'
function Footer() {
    return (
        <div className="footer">

            
             <div className="social__media1">
               <i class="fa fa-facebook"></i>
               <i class="fa fa-linkedin"></i>
               <i class="fa fa-instagram"></i>
               <i class="fa fa-github"></i>
             </div>

             
             <div className="dropdown1">
             <AnchorLink href="#home"><i class="fa fa-angle-up" id="down1"></i></AnchorLink>
              </div>

              <div className="footer__Details">
                <p>All The Work Done By @avigator003</p>
                <p>© All credit goes to Akshat Lakshkar - Copyright 2017 Akshat- Design by avigaotr003</p>

              </div>
        </div>
    )
}

export default Footer
