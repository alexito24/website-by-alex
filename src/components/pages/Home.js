import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

import Footer from "../Footer";
import Navigation2 from "../Navigation2";
import pht1 from "../../images/pht1.jpg";
import pht2 from "../../images/pht2.jpg";
import pht3 from "../../images/pht3.jpg";

// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag
import { BIRDSBG, NETBG, HALOBG, DOTSBG, WAVESBG } from "../AnimatedBG";

export function Home() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <div className="parent">
        <Navigation2 />

        {/* /content START this is what changes between each page!!!!!!!!!!!1 */}
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img
              className="d-block w-100 carouselImg"
              src={pht1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carouselImg"
              src={pht2}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Beautifully desingned websites</h3>
              <p>Our </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carouselImg"
              src={pht3}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Responsive Websites</h3>
              <p>
                Access your website from any platform and get the best
                experience on any device.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div className="content">
          {/* <div className="nomargin">{DOTSBG()}</div>
          <div className="gap"></div> */}
          <h3>here are some examples of our builds:</h3>
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
