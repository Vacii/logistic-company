import React, { useState, useEffect } from "react";
import truckImage from "../assets/truck-preview.png";
import "../styles/AnimatedElement.css";

const MainText = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const triggerPoint = 1000;

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`container`}>
      <div
        className={`animated-element ${
          scrollPosition >= triggerPoint ? "scroll-up" : ""
        }`}
      >
        <div className="w-full">
          <h1 className="font-bold w-[90%] pt-8 lg:text-[110px]">
            Dopravní <span className="text-custom-yellow">řešení</span>
          </h1>
          <h1 className="font-bold w-[90%] pb-8 lg:text-[110px]">
            pro vaši firmu
          </h1>
        </div>
        <img
          src={truckImage}
          className={`image-element ${
            scrollPosition >= triggerPoint ? "hidden" : ""
          }`}
          alt="Truck"
          style={{ transform: `translateX(-${scrollPosition}px)` }}
        />
      </div>
    </div>
  );
};

export default MainText;
