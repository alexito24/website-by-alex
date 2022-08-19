import { NETBG } from "../AnimatedBG";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";

import React from "react";
import Footer from "../Footer";
import Navigation2 from "../Navigation2";

import pht2 from "../../images/pht2.jpg";
// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

export function Contact() {
  return (
    <>
      <div className="parent">
        <Navigation2 />

        {/* /content START this is what changes between each page!!!!!!!!!!!1 */}
        <div className="content">
          <div className="nomargin">{NETBG()}</div>
          <div className="gap"></div>
          <h3> our phone number : 720 551 3601 </h3>
          <h3> our email : email@email.email </h3>
          <h3>
            {" "}
            our socials: <br />
            <a href="https://www.facebook.com/Websites-By-Alex-109210625087793">
              {" "}
              <FacebookIcon fontSize="large" />{" "}
            </a>
            <br />
            <a href="https://github.com/alexito24">
              {" "}
              <GitHubIcon fontSize="large" />{" "}
            </a>
          </h3>
        </div>
        {/* /content END!!!! this is what changes between each page!!!!!!!!!!!1 */}

        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}
