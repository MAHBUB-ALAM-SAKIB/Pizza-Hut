import React from 'react'
import InstagramIcon from "@mui/icons-material/Instagram"
import FacebookIcon from "@mui/icons-material/Facebook"
import TwitterIcon from "@mui/icons-material/Twitter"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"
import "./Footer.css"

function Footer() {
  return (
    <div className="footer">
        <div className="socialMedia svg">
            <InstagramIcon/>
            <FacebookIcon/>
            <WhatsAppIcon/>
            <TwitterIcon/>
        </div>
        <p> &copy; 2023 PizzaHut.com </p>
    </div>
  )
}

export default Footer