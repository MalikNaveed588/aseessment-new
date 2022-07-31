import React from "react";

import "./index.scss";
import "./featured.scss";


const Featured = () => {
  return (
    <div className="row m-5 container p-3">

        <div className="col-4">
       
        <img
        style={{width:"330px",height:"300px"}}
            src="https://play-lh.googleusercontent.com/Fto1xcq6wMHJ8RiXHFjsgwxMEoTVj4wpLQO1ucBL0VP7we7OsvS1FHxf2viW-lGzHA"
          />
        </div>
        <div className="col-8 ">
            
            <div className="col-12 d-flex view-row">
                <div style={{display:"flex",paddingBottom:"20px"}}>
                    <div style={{marginLeft:"20px" ,color:'grey',fontSize:"16px",fontWeight:"600",lineHeight:"28px"}}>Posted on October 6th 2021</div>
                <div style={{marginLeft:"20px" ,color:"grey"}}> <i className="fa-solid fa-eye" style={{color:"grey",fontSize:12}}></i> 565 views</div></div>
                
                <div className="featured-text">FEATURED</div>
            </div>
            <div style={{fontSize:"40px",lineHeight:"56px",fontWeight:"700" ,paddingBottom:"10px"}}>
            Should I Buy a New Car or Lease a New Car in 2021?
            </div>
            <div style={{color:"grey"}}>We provide a full range of front end mechanical repairs for all makes and models of cars, no matter the cause. This includes, We provide a full range of front end mechanical.</div>
            <div className="pt-7" style={{paddingTop:"40px"}}>Read more  <i className="fa-solid fa-arrow-right-long"></i></div>
        
        </div>
        
    </div>
  );
};

export default Featured;
