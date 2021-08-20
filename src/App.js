import React, { useState, useContext } from "react";
import Form from "./Components/Form";
import "./Assets/Styles/App.scss";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Viewfile from "./Components/Viewfile";
import { urlContext } from "./context";
import { imageContext } from "./imageContext";
import { GlobalStyle, lightTheme, darkTheme } from "./Assets/globalStyles";
import { useTheme } from "./Hooks/useTheme";
import ToggleTheme from "./Components/ToggleTheme";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const imgUrl = useContext(urlContext);
  const previewImage = useContext(imageContext);
  const [imageurl, setimageurl] = useState(imgUrl);
  const [prevImage, setPrevImage] = useState(previewImage);

  const [theme, toggleTheme] = useTheme();

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <urlContext.Provider value={[imageurl, setimageurl]}>
      <imageContext.Provider value={[prevImage, setPrevImage]}>
        <ThemeProvider theme={themeMode}>
          <ToastContainer
            position="top-center"
            autoClose={2500}
            hideProgressBar={true}
            newestOnTop={true}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <div className="App">
            <GlobalStyle />
            <ToggleTheme theme={theme} toggleTheme={toggleTheme} />
            <Router>
              <Switch>
                <Route path="/" exact component={Form} />
                <Route path="/preview" component={Viewfile} />
              </Switch>
            </Router>
          </div>
        </ThemeProvider>
      </imageContext.Provider>
    </urlContext.Provider>
  );
}

export default App;
