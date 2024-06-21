import React from "react";
import "./AppDownload.css";
import { assets } from "../../assets/assets";

const AppDownload = () => {
  return (
    <div className="app-download" id="app-download">
      <p>
        For Better Experience Download <br />
      </p>
      <h1>
        Rasoi<span>On</span>Wheels
      </h1>
      <div className="app-download-platforms">
        <img src={assets.play_store} alt="Play Store" />
        <img src={assets.app_store} alt="App Store" />
      </div>
    </div>
  );
};

export default AppDownload;
