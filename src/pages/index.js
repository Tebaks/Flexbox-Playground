import React, { useState, useMemo } from "react";
import DirectionBox from "../components/DirectionBox";
import JustifyBox from "../components/JustifyBox";
import "./styles.css";
import AlignBox from "../components/AlignBox";

const Home = () => {
  const [direction, setDirection] = useState("row");
  const [align, setAlign] = useState("center");
  const [justify, setJustify] = useState("center");

  const style = useMemo(
    () => ({
      flexDirection: direction,
      alignItems: align,
      justifyContent: justify,
    }),
    [direction, align, justify]
  );

  console.log("style", style);

  return (
    <div className="container">
      <div className="contact-container">
        <h2>Contact me!</h2>
        <div className="icon-container">
          <a href="https://github.com/Tebaks">
            <img className="icon" src="/images/github.svg" alt="github" />
          </a>
          <a href="https://www.linkedin.com/in/kenanabbak/">
            <img className="icon" src="/images/linkedin.svg" alt="linkedin" />
          </a>
          <a href="https://kenanabbak.medium.com/">
            <img className="icon" src="/images/medium.svg" alt="medium" />
          </a>
          <a href="mailto: kenanabbak@hotmail.com">
            <img className="icon" src="/images/email.svg" alt="email" />
          </a>
        </div>
        <a href="https://github.com/Tebaks/Flexbox-Playground">
          <button className="source-code-button">Source Code</button>
        </a>

        <h2 style={{ margin: 5 }}>@Kenan Abbak</h2>
      </div>
      <div className="button-container">
        <DirectionBox direction={direction} onClick={setDirection} />
        <AlignBox align={align} onClick={setAlign} />
        <JustifyBox justify={justify} onClick={setJustify} />
      </div>
      <div style={style} className="flexbox-container">
        <h2 className="flexbox-container-text">Flexbox Container</h2>
        <div className="flexbox-item flexbox-1"></div>
        <div className="flexbox-item flexbox-2"></div>
        <div className="flexbox-item flexbox-3"></div>
        <div className="axis main-axis"></div>
        <div className="axis cross-axis"></div>
      </div>
    </div>
  );
};

export default Home;
