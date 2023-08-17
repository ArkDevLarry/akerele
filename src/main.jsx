import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";
import { logo } from "./assets";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


  // Get reference to the <meta> tag
  const ogImageMeta = document.querySelectorAll('meta[property="og:image"]');
  const twitterImageMeta = document.querySelector('meta[name="twitter:image"]');

  // Function to update the og:image content
  function updateOGImage(filename) {
    twitterImageMeta.content = `./src/assets/${filename}.png`;  
    ogImageMeta.forEach((e)=> {
      e.content = `./src/assets/${filename}.png`;
    })
  }

  // Example: Call the function with the new filename
  updateOGImage(logo);
