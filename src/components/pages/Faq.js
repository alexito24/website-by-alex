import React from "react";
import Footer from "../Footer";
import Navigation2 from "../Navigation2";

import pht2 from "../../images/pht2.jpg";
// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag
import { BIRDSBG, NETBG, HALOBG, DOTSBG, WAVESBG } from "../AnimatedBG";

export function Faq() {
  return (
    <>
      <div className="parent">
        <Navigation2 />

        {/* /content START this is what changes between each page!!!!!!!!!!!1 */}
        <div className="content">
          <div className="nomargin">{HALOBG()}</div>
          <div className="gap"></div>

          <h2> These are my frequently asked questions </h2>
          <h3>Is this service guarateed?</h3>
          <h4>Yes</h4>
          <h3>Will I be created well?</h3>
          <h4>Always</h4>
          <h3>Is this a quality built?</h3>
          <h4>Yeees!!!!</h4>
          <h3>How do base your price?</h3>
          <h4>Our price is based on the client's needs </h4>
          <img className="img1" src={pht2} alt="moutain" />
        </div>
        {/* /content END!!!! this is what changes between each page!!!!!!!!!!!1 */}

        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}
