import React, { useEffect, useState } from "react";
import "../styles/main.css";
import MainText from "./MainText.jsx";

export default function Main() {
  return (
    <main className="h-[10000px]">
      <div className="flex flex-col gap-5 items-start text-white px-[10vw] lg:px-[10rem]">
        <MainText />
        <div className="truck-container mt-10"></div>
      </div>
    </main>
  );
}
