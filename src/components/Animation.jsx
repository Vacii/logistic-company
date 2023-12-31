import React, { useState, useEffect } from "react";
import truckImage from "../assets/truck-preview.png";
import "../styles/AnimatedElement.css";

const Animation = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const triggerPoint = 1000;
  const hiddenPoint = 1900;
  const buttonTrigger = 350;

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`container`}>
      {scrollPosition < hiddenPoint && (
        <div
          className={`animated-element ${
            scrollPosition >= triggerPoint ? "scroll-up" : ""
          }`}
        >
          <div className="md:mt-10">
            <h1
              className="font-bold  w-full pt-8 lg:text-[110px]"
              style={
                scrollPosition >= triggerPoint
                  ? { transform: `translateY(-${scrollPosition - 1000}px)` }
                  : null
              }
            >
              Dopravní <span className="text-custom-yellow">řešení</span>
            </h1>
            <h1
              className="font-bold w-full pb-8 lg:text-[110px]"
              style={
                scrollPosition >= triggerPoint
                  ? { transform: `translateY(-${scrollPosition - 1000}px)` }
                  : null
              }
            >
              pro vaši firmu
            </h1>
          </div>
          <div className="flex justify-center w-full mt-20">
            <a
              href="/#contact"
              className={`button-element mt-16 p-5 md:p-10 bg-custom-yellow rounded-full font-bold text-xl md:text-4xl ${
                scrollPosition >= buttonTrigger ? "button-show" : ""
              }`}
              style={
                scrollPosition >= triggerPoint
                  ? { transform: `translateY(-${scrollPosition - 1000}px)` }
                  : null
              }
            >
              Kontaktujte nás
            </a>
          </div>
          <img
            src={truckImage}
            className={`image-element lg:right-0 ${
              scrollPosition >= triggerPoint ? "scroll-up" : ""
            }`}
            alt="Truck"
            style={{
              transform: `translateX(-${scrollPosition}px) ${
                scrollPosition >= triggerPoint
                  ? `translateY(-${scrollPosition - 1000}px)`
                  : ""
              }`,
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Animation;
