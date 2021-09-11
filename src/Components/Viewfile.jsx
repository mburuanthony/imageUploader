import React, { useContext } from "react";
import "../Assets/Styles/ViewFile.scss";
import { urlContext } from "../context";
import { imageContext } from "../imageContext";
import { useHistory } from "react-router";
import { toast } from "react-toastify";

function Viewfile() {
  const [imageurl, setimageurl] = useContext(urlContext);
  const [prevImage, setPrevImage] = useContext(imageContext);
  const history = useHistory();

  const copyText = () => {
    toast.success("Link copied to clipboard");
    navigator.clipboard.writeText(imageurl);
  };

  if (!prevImage) history.push("/");

  return (
    <div className="ViewFile">
      <span
        className="material-icons"
        style={{ fontSize: "24px", margin: "10px 0 0 0", color: "#219653" }}
      >
        check_circle
      </span>
      <span
        style={{
          fontSize: "16px",
          fontWeight: "500",
          margin: "10px 0 0 0",
          color: "#4F4F4F",
          letterSpacing: "-0.035em",
        }}
      >
        Uploaded successfully&nbsp;!
      </span>

      <img src={prevImage} alt="" />
      <div>
        <input type="text" placeholder={imageurl} readOnly="readonly" />
        <button className="copy_txt" onClick={copyText}>
          Copy link
        </button>
      </div>
    </div>
  );
}

export default Viewfile;
