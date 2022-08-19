import React, { useState, useEffect, useRef } from "react";
import Footer from "../Footer";
import Navigation2 from "../Navigation2";
import NET from "vanta/dist/vanta.net.min";

import pht2 from "../../images/pht2.jpg";
// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag
import { BIRDSBG, NETBG, HALOBG, DOTSBG, WAVESBG } from "../AnimatedBG";

export function About() {
  return (
    <>
      <div className="parent">
        <Navigation2 />
        {/* {WAVESBG()} */}
        <div className="gap1">WBA</div>

        {/* /content START this is what changes between each page!!!!!!!!!!!1 */}
        <div className="content">
          <div className="nomargin">{BIRDSBG()}</div>
          <div className="gap"></div>

          <h2>this is the about section</h2>
          <p>We are a small family owned company</p>
        </div>
        {/* /content END!!!! this is what changes between each page!!!!!!!!!!!1 */}

        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}
