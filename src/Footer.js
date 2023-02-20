import React from "react";
import './Footer.css';


const Footer = () => {
  return (
   <>
   <footer className="footer-distributed" style={{background:"black",color:"gray"}}>

<div className="footer-right">

<center> <img
       alt="logo"
            style={{ width: "160px", height: "40px" }}
            src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
          /></center>


</div>

<center><div className="footer-left">

  <p className="footerr">
    {/* <h3>WatchAnyMovie</h3> */}
    <p className="footerr center" style={{color:"grey"}}>A Free Movie Streaming Application built by <i style={{color:"#cc0000"}}>HAKWebs &copy; </i> 2022</p>
  </p>

</div></center>

</footer>
       
   </>
    
  );
};

export default Footer;
