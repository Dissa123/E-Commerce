import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import {useEffect,useState} from 'react';
function Image() {
  return (
    <>
      <div className="container image_box">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Upload From Computer</h4>
            <h6 className="card-subtitle mb-2 text-muted">
              Select a folder where the image is place
            </h6>
            <p className="card-text image_border">
              <div
                className="row border"
                style={{ width: "100%", margin: "0 auto" }}
              >
                <div className="col-md-12  text-center">
                  <FontAwesomeIcon
                    icon={faImage}
                    style={{
                      fontSize: "50px",
                      padding: "35px 0 40px",
                      color: "#0288F7",
                    }}
                  />
                </div>
                <div className="col-md-12  text-center">
                  <h4>Drop your image here or browse</h4>
                  <p>Supports.JPG,JPEG2000,PNG</p>
                </div>
              </div>
              <div className="row progress mt-5" style={{width:"100%",margin:"0 auto",height:"10px"}}>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="35"
                    aria-valuemin="0"
                    // aria-valuemax="100"
                    style={{width:"25%",backgroundColor:"#0288f7"}}
                  ></div>
                </div>
              </div>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Image;
