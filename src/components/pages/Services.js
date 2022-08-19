import React from "react";
import Footer from "../Footer";
import Navigation2 from "../Navigation2";
import pht1 from "../../images/pht1.jpg";
import pht2 from "../../images/pht2.jpg";
import pht3 from "../../images/pht3.jpg";

// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag
import { BIRDSBG, NETBG, HALOBG, DOTSBG, WAVESBG } from "../AnimatedBG";

export function Services() {
  return (
    <>
      <div className="parent">
        <Navigation2 />

        {/* /content START this is what changes between each page!!!!!!!!!!!1 */}
        <div className="content">
          <div className="services">
            <div className="nomargin">{WAVESBG()}</div>
            <div className="gap"></div>
            <h2> These are my services</h2>
            <ul>
              <li>websites</li>
              <img className="img1" src={pht1} alt="moutain" />
              <li>web apps</li>
              <img className="img1" src={pht2} alt="moutain" />
              <li>updating web apps</li>
              <img className="img1" src={pht3} alt="moutain" />
            </ul>
          </div>
        </div>
        {/* /content END!!!! this is what changes between each page!!!!!!!!!!!1 */}

        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}
