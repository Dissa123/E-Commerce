import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
function FileUploader() {
  const [fileList, setFileList] = useState([]);
  const onFileDrop = (e) => {
    const newFile = e.target.files[0];
    if (newFile) {
      const updatedList = [...fileList, newFile];
      setFileList(updatedList);
      console.log(fileList);
    }
  };
  const border = {
    border: "1px solid #000",
    width: "50%",
    margin: "0 auto",
    paddingBottom: "30px",
    backgroundColor: "#F8F8F8",
  };
  const File = {
    opacity: "0",
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    cursor: "pointer",
  };

  const Center = {
    borderRadius: "30px",
    padding: "10px",
    backgroundColor: "#0288F7",
    border: "0px",
  };
  return (
    <>
      <div className="container" >
        {/* <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Launch demo modal
        </button> */}

        <div
        //   className="modal fade"
        //   id="exampleModal"
        //   tabIndex="-1"
        //   aria-labelledby="exampleModalLabel"
        //   aria-hidden="true"
        >
          <div className="modal-dialog" style={{ width: "35%" }}>
            <div className="modal-content">
              <div className="modal-header" style={{ border: "0px" }}>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <h4 className="text-center">Import a Products</h4>
                <p className="text-center fs-5">
                  To properly import your products{" "}
                  <a href="#" style={{ color: "#0288F7" }}>
                    download a sample
                  </a>{" "}
                  template and follow the instructions of the required format
                </p>
              </div>

              {/* Footer */}
              <div className="border" style={border}>
                <div className="row file_icon">
                  <div className="col-md-12 text-center">
                    {/* icon */}
                    <FontAwesomeIcon
                      icon={faFile}
                      style={{ fontSize: "50px", padding: "35px 0 40px" }}
                    />
                    <input
                      type="file"
                      id="file"
                      name="file"
                      className="File"
                      style={File}
                      onChange={onFileDrop}
                     
                    ></input>
                    
                  </div>
                  <div className="col-md-12">
                    <h5 className="fw-bolder text-center">Drop File here</h5>
                    <p className="text-center" style={{ fontSize: "1rem" }}>
                      Supports CSV, XLS, XLXS, XLSM
                    </p>
                  </div>
                </div>
              </div>

              {/* Adding button and OR */}
              <div className="row">
                <div className="col-md-12">
                  <p className="text-center mt-5">OR</p>
                </div>
                <div
                  className=" d-grid  col-8 mx-auto"
                  style={{ paddingBottom: "50px" }}
                >
                  <button
                    className="btn btn-primary mt-5"
                    type="button"
                    style={Center}
                  >
                    BROWSE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FileUploader;
