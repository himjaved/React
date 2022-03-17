import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <div className="Footer">
      <small class="footer">
        <a
          href="https://github.com/himjaved/My-weather-project"
          target="_blank"
        >
          Open Source Code
        </a>
        by Himja Ved and{" "}
        <a href="https://pedantic-meitner-862f0f.netlify.app/" target="_blank">
          hosted on Netlify
        </a>{" "}
      </small>
    </div>
  );
}
