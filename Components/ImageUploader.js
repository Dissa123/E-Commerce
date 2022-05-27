import React from "react";
import { Fragment } from "react";
import { useState } from "react";
import Progress from "./Progress";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
function ImageUploader() {
const backColor ={
  backgroundColor:"#f3fbfe"
}

  const [uploadPrecentage, setUploadPrecentage] = useState(0);
  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("No File");
  const [uploadedFile, setUploadedFile] = useState({});
  const onChange = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post("/upload", formData, {
        headers: {
          // deal with progress bar
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progressEvent) => {
          setUploadPrecentage(
            parseInt(
              Math.round((progressEvent.loaded * 100) / progressEvent.total)
            )
          );

          // Clear percentage
          setTimeout(() => setUploadPrecentage(0), 10000);
        },
      });
      const { fileName, filePath } = res.data;
      setUploadedFile({ fileName, filePath });
    } catch (err) {
      if (err.response.status === 500) {
        console.log("There was a problem with the server ");
      }
    }
  };
  return (
    <Fragment>
      <div
        className="container mt-5"
        style={{ width: "50%", border: "1px solid #000", padding: "20px" }}
      >
        <div className="row" >
          <div className="col-md-12">
            <h3 style={{fontWeight:"600"}}>Upload From Computer</h3>
            <p>Select a folder where the image is place</p>
          </div>

          <div className="col-md-12 mt-5">
            <form onSubmit={onSubmit} >
              {/* File uploader */}
              <div
                className="iconAndFileType"
                style={{ border: "1px solid #000", borderStyle:"dashed"}}
              >
                <div className="custom-file mb-4 text-center" style={{backgoundColor:"#ffff"}}>
                  <FontAwesomeIcon
                    icon={faImage}
                    style={{ fontSize: "100px", padding: "35px 0 40px" }}
                  />
                  <div className="col-md-12">
                    <h5 className="fw-bolder text-center">Drop File here</h5>
                    <p className="text-center" style={{ fontSize: "1rem" }}>
                      Supports JPG, JPEG2000, PNG
                    </p>
                  </div>
                </div>
                <div className="chooseFile">
                  <input
                    className="form-control"
                    type="file"
                    id="formFile"
                    onChange={onChange}
                  ></input>
                </div>
              </div>
              <div
                className="col-md-12 mt-5"
                style={{ border: "0px solid #000", padding: "20px", }}
              >
                <Progress percentage={uploadPrecentage} />
              </div>
              <div className="buttonup" >
                <input
                  type="submit"
                  value="upload"
                  className="btn btn-primary btn-block "
                  style={{top:"-30px",width:"50%",margin:"0 auto",padding:"10px",borderRadius:"20px"}}
                />
              </div>

              <label className="form-label text-center mt-5" htmlFor="formFile" style={{border:"1px solid #000",width:"100%",padding:"10px",borderRadius:"10px"}}>
                {filename}
              </label>
            </form>
            {uploadedFile ? (
              <div className="row mt-5">
                <div className="col-md-6 m-auto">
                  <h3 className="text-center">{uploadedFile.fileName}</h3>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default ImageUploader;
