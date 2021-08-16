import React, { useContext } from "react";
import "../Assets/Styles/ViewFile.scss";
import { urlContext } from "../context";
import { imageContext } from "../imageContext";
import { useHistory } from "react-router";

function Viewfile() {
  const [imageurl, setimageurl] = useContext(urlContext);
  const [prevImage, setPrevImage] = useContext(imageContext);
  const history = useHistory();

  const goBack = () => {
    setPrevImage(null);
    setimageurl(null);
    history.push("/");
  };

  if (!prevImage) history.push("/");

  return (
    <div className="ViewFile">
      <span
        className="material-icons"
        style={{ fontSize: "28px", margin: "10px 0 0 0", color: "green" }}
      >
        check_circle
      </span>
      <span
        style={{ fontSize: "18px", fontWeight: "bold", margin: "10px 0 0 0" }}
      >
        Uploaded successfully&nbsp;!
      </span>

      <img src={prevImage} alt="" />
      <div>
        <input type="text" placeholder={imageurl} readOnly="readonly" />
        <button onClick={() => navigator.clipboard.writeText(imageurl)}>
          Copy link
        </button>
      </div>
      <span className="material-icons" id="arrow" onClick={goBack}>
        arrow_back
      </span>
    </div>
  );
}

export default Viewfile;
