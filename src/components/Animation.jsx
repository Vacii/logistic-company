import React, { useState, useEffect } from "react";
import truckImage from "../assets/truck-preview.png";
import "../styles/AnimatedElement.css";

const Animation = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const triggerPoint = 1000;
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

  console.log(scrollPosition);
  return (
    <div className={`container`}>
      <div
        className={`animated-element ${
          scrollPosition >= triggerPoint ? "scroll-up" : ""
        }`}
      >
        <div className="">
          <h1
            className="font-bold w-[90%] pt-8 lg:text-[110px]"
            style={
              scrollPosition >= triggerPoint
                ? { transform: `translateY(-${scrollPosition - 1000}px)` }
                : null
            }
          >
            Dopravní <span className="text-custom-yellow">řešení</span>
          </h1>
          <h1
            className="font-bold w-[90%] pb-8 lg:text-[110px]"
            style={
              scrollPosition >= triggerPoint
                ? { transform: `translateY(-${scrollPosition - 1000}px)` }
                : null
            }
          >
            pro vaši firmu
          </h1>
        </div>
        <div className="flex justify-center w-full mt-24">
          <button
            className={`button-element mt-16 p-5 bg-custom-yellow rounded-full font-bold text-xl ${
              scrollPosition >= buttonTrigger ? "button-show" : ""
            }`}
            style={
              scrollPosition >= triggerPoint
                ? { transform: `translateY(-${scrollPosition - 1000}px)` }
                : null
            }
          >
            Kontaktujte nás
          </button>
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

export default Animation;
