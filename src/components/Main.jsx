import React, { useEffect, useState } from "react";
import "../styles/main.css";

export default function Main() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.log(scrollY);
  return (
    <main className="h-[1000px]">
      <div className="flex flex-col gap-5 items-start text-white px-[10vw] lg:px-[10rem]">
        <div className="w-full">
          <h1 className="font-bold w-[90%] pt-8 lg:text-[110px]">
            Dopravní <span className="text-custom-yellow">řešení</span>
          </h1>
          <h1 className="font-bold w-[90%] pb-8 lg:text-[110px]">
            pro vaši firmu
          </h1>
        </div>
        <div>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
        </div>
        <div className="truck-container mt-10">
          <img
            src="./src/assets/truck-preview.png"
            className="truck"
            alt="Truck"
          />
        </div>
      </div>
    </main>
  );
}
