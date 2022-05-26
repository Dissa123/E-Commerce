import React from "react";
import { Fragment } from "react";
import { useState } from "react";
import Progress from "./Progress";
import axios from "axios";

function ImageUploader() {
  const [uploadPrecentage, setUploadPrecentage] = useState(0);
  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("Choose File");
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
      <div className="container mt-5"style={{width:"50%",border:"1px solid #000",padding:"20px"}}>
        <div className="row">
          <div className="col-md-12">
            <form onSubmit={onSubmit}>
              {/* File uploader */}
              <div className="custom-file mb-4">
               
                <input
                  className="form-control"
                  type="file"
                  id="formFile"
                  onChange={onChange}
                ></input>
                 <label className="form-label" htmlFor="formFile">
                  {filename}
                </label>
              </div>
              <Progress percentage={uploadPrecentage}/>
              <input
                type="submit"
                value="upload"
                className="btn btn-primary btn-block mt-4"
              />
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
