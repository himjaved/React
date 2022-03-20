import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <div className="Footer">
      <small className="footer">
        <a
          href="https://github.com/himjaved/React"
          target="_blank"
          rel="noreferrer"
        >
          Open Source Code
        </a>
        by Himja Ved and{" "}
        <a
          href="https://upbeat-blackwell-363820.netlify.app/?"
          target="_blank"
          rel="noreferrer"
        >
          hosted on Netlify
        </a>{" "}
      </small>
    </div>
  );
}
