import React from "react";
import "./footer.scss";
const Footer = () => {
  return (
    <>
      <div
        className="row footer-style"
        style={{ backgroundColor: "#2b2828", marginTop: "40px" }}
      >
        <div className="col-6 d-flex left-footer">
          <div
            className="left-text"
            style={{ fontweight: "700", fontSize: "40px", lineHeight: "40px" }}
          >
            Get in touch with us for your service
          </div>
          <div
            className="icons"
            style={{
              display: "flex",
              textAlign: "left",
              marginRight: "310px",
              marginTop: "40px",
            }}
          >
            <i className="fa-brands fa-facebook px-1"></i>{" "}
            <i className="fa-brands px-1 fa-twitter"></i>
            <i className="fa-brands px-1 fa-instagram"></i>
            <i className="fa-brands px-1 fa-linkedin"></i>
          </div>
        </div>
        <div className="col-6 pt-5" style={{ marginTop: "35px" }}>
          <div
            style={{
              fontSize: "14px",
              fontWeight: "600",
              lineHeaight: "31.5px",
              color: "grey",
            }}
          >
            Help line Number
          </div>
          <div
            style={{
              fontSize: "24px",
              fontWeight: "600",
              lineHeaight: "36px",
              color: "white",
            }}
          >
            1800 265 24 52
          </div>
          <div
            style={{
              fontSize: "14px",
              fontWeight: "600",
              lineHeaight: "31px",
              color: "grey",
            }}
          >
            Address
          </div>
          <div
            style={{
              fontSize: "14px",
              fontWeight: "600",
              lineHeaight: "31.5px",
              color: "white",
            }}
          >
            NH 234 Public Square San Francisco 65368
          </div>
          <div
            style={{
              fontSize: "14px",
              fontWeight: "600",
              lineHeaight: "31px",
              color: "grey",
            }}
          >
            We are open
          </div>
          <div>Monday to Friday 9:00 AM to  10:00  AM</div>
        </div>
      </div>
    </>
  );
};
export default Footer;
