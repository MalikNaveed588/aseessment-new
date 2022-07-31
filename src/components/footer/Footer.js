import React from "react"
import "./footer.scss"
const Footer=()=>{
    return(
        <><div className="row footer-style" style={{backgroundColor:"#2b2828"}}>
            <div className="col-6 d-flex left-footer">
            <div className="left-text" style={{fontweight:"700",fontSize:"40px",lineHeight:"40px"}}>Get in touch with us for your  service</div>
            <div className="icons" style={{display:"flex"}}><i className="fa-brands fa-facebook px-1"></i> <i className="fa-brands px-1 fa-twitter"></i>
            <i className="fa-brands px-1 fa-instagram"></i>
            <i className="fa-brands px-1 fa-linkedin"></i></div>
            </div>
            <div className="col-6">
                right
            </div></div></>
    )
}
export default Footer