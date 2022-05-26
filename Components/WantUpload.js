import React from "react";
import Image from "next/image";
import Link from "next/link";
import gdrive from "../public/img/gdrive.png";
import pendrive from "../public/img/pdrive.png";
import dekstop from "../public/img/desktop.png";

function WantUpload() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {/* Header bar */}
            <p>Header Section</p>
          </div>
        </div>
        <div
          className="section_card position-absolute top-50 start-50 translate-middle"
          style={{ backgroundColor: "#F4FBFF", padding: "40px 40px 40px 40px" }}
        >
          <div className="row">
            <div className="col-md-12">
              <h2
                className="text-center mt-5"
                style={{
                  fontSize: "2rem",
                  textAlign: "center",
                  fontWeight: "20px",
                  fontWeight: "600 !important",
                }}
              >
                Next, Lets Set Up Your Product Photos.How D You Want To Upload
                Them?
              </h2>
            </div>
          </div>
          {/* Selecting Sections */}
          <div className="row mt-5" style={{ marginTop: "50%" }}>
            <div className="col-md-4">
              <Link href="../pages/Google.js">
                <div className="card" style={{ width: "18rem" }}>
                  <Image src={gdrive} alt="googleDrive" />
                  <p style={{ padding: "10px", textAlign: "center" }}>
                    Upload From Google Drive
                  </p>
                </div>
              </Link>
            </div>

            <div className="col-md-4">
              <Link href="#">
                <div className="card" style={{ width: "18rem" }}>
                  <Image src={pendrive} alt="googleDrive" />
                  <p style={{ padding: "10px", textAlign: "center" }}>
                    Upload From USB connection
                  </p>
                </div>
              </Link>
            </div>

            <div className="col-md-4">
              <Link href="#">
                <div className="card" style={{ width: "18rem" }}>
                  <Image src={dekstop} alt="googleDrive" />
                  <p style={{ padding: "10px", textAlign: "center" }}>
                    Upload From Computer Device
                  </p>
                </div>
              </Link>
            </div>
          </div>

          {/* Footer */}
        </div>
        {/* <div className="">
            <div className="row">
              <div className="col-md-12">
                <h1>FOOTER SECTION</h1>
              </div>
            </div>
          </div> */}
      </div>
    </>
  );
}

export default WantUpload;
