import React, { useState, useContext } from "react";
import Progress from "./Progress";
import dragImg from "../Assets/Images/darktheme.png";
import "../Assets/Styles/Form.scss";
import { imageContext } from "../imageContext";

function Form() {
  const [file, setFile] = useState(null);
  const [prevFile, setPrevFile] = useState(null);
  const [, setPrevImage] = useContext(imageContext);

  const fileHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setPrevFile(reader.result);
        setPrevImage(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
    setFile(e.target.files[0]);
  };

  return (
    <div className="Form">
      {file && <Progress file={file} setFile={setFile} />}
      <p>Upload your image</p>
      <div className="prev_img">
        <img src={file ? prevFile : dragImg} alt="" />
      </div>
      <form encType="multipart/form-data">
        <input
          type="file"
          id="image_file"
          accept="image/*"
          onChange={fileHandler}
        />
        <br />
        <label htmlFor="image_file" className="img_label">
          Choose a file
        </label>
      </form>
    </div>
  );
}

export default Form;
