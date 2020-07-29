import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Body from "./Components/Body";
import Header from "./Components/Header";

function App() {
  const [photos, setPhotos] = useState([]);

  const effectFn = () => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=8pa2gNvoS7XiS65lfXRrzERWT0aOWWRtcTuWV129"
      )
      .then((response) => {
        console.log("success", response);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(effectFn);

  return (
    <div className="App">
      <Header />
      <Body />
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun{" "}
        <span role="img" aria-label="go!">
          🚀
        </span>
        !
      </p>
    </div>
  );
}

export default App;
