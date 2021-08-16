import React, { useState, useContext } from "react";
import Form from "./Components/Form";
import "./Assets/Styles/App.scss";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Viewfile from "./Components/Viewfile";
import { urlContext } from "./context";
import { imageContext } from "./imageContext";

function App() {
  const imgUrl = useContext(urlContext);
  const previewImage = useContext(imageContext);
  const [imageurl, setimageurl] = useState(imgUrl);
  const [prevImage, setPrevImage] = useState(previewImage);

  return (
    <urlContext.Provider value={[imageurl, setimageurl]}>
      <imageContext.Provider value={[prevImage, setPrevImage]}>
        <div className="App">
          <Router>
            <Switch>
              <Route path="/" exact component={Form} />
              <Route path="/preview" component={Viewfile} />
            </Switch>
          </Router>
        </div>
      </imageContext.Provider>
    </urlContext.Provider>
  );
}

export default App;
