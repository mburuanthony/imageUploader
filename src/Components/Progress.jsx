import React, { useContext } from "react";
import "../Assets/Styles/Progress.scss";
import { urlContext } from "../context";
import useStore from "../Firebase/useStore";
import { useHistory } from "react-router";

function Progress({ file, setFile }) {
  const { progress, url } = useStore(file);
  const [, setimageurl] = useContext(urlContext);
  const history = useHistory();
  if (progress === 100 && url) {
    setFile(null);
    setimageurl(url);
    history.push("/preview");
  }

  return (
    <div className="progress">
      <span>Uploading...</span>
      <div style={{ width: "340.71px" }}>
        <div id="progress" style={{ width: progress + "%" }}></div>
      </div>
    </div>
  );
}

export default Progress;
