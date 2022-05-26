import React from "react";
import woo from "../public/img/s1.png";
import Image from "next/image";
function WoocomOneClick() {
  const Center = {
    borderRadius: "30px",
    padding: "10px",
  };
  return (
    <div>
      <div className="container">
        <div className="row ">
          <div className="col-md-1">
            <p>Nav Header</p>
          </div>
          <div
            className="titleandinput position-absolute top-50 start-50 translate-middle"
            style={{
              backgroundColor: "#F4FBFF",
              padding: "20px",
              width: "70%",
            }}
          >
            {/* title */}
            <div className="row " style={{ textAlign: "center" }}>
              <div className="col-md-12">
                <h2 style={{ fontSize: "2rem", fontWeight: "80px" }}>
                  Integrate WooCommerce And Jewelify With One Click
                </h2>
              </div>
            </div>
            <div className="row text-center  mt-5">
              <div className="col-md-12" style={{ margin: "0 auto" }}>
                {/* image */}
                <Image src={woo} />
              </div>
            </div>

            {/* Input Felid */}
            <div
              className="row"
              style={{ display: "flex", margin: "0 auto", width: "50%" }}
            >
              <div className="col-md-12 ">
                <div className=" g-3 align-items-center ">
                  <div className="row">
                    <label htmlFor="inputText" className="form-label">
                      Client ID
                    </label>
                    <input
                      type="text"
                      id="inputPassword5"
                      className="form-control"
                      aria-describedby="passwordHelpBlock"
                    />
                  </div>

                  <div className="row mt-5">
                    <label htmlFor="inputText" className="form-label">
                      Client Secret
                    </label>
                    <input
                      type="text"
                      id="inputPassword5"
                      className="form-control g-3"
                      aria-describedby="passwordHelpBlock"
                    />
                  </div>
                </div>
              </div>
              
              {/* Button */}
              <div className="row mt-5" style={{ textAlign: "center" }}>
                <div className="">
                  <button
                    type="button"
                    className="btn btn-primary"
                    style={{
                      width: "80%",
                      borderRadius: "20px",
                      padding: "10px",
                    }}
                  >
                    CONNECT
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WoocomOneClick;
