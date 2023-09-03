import React, { useEffect, useState } from "react";
import "../styles/main.css";
import Animation from "./Animation.jsx";
import { About } from "./About";
import { Contact } from "./Contact";
import { Transfer } from "./Transfer";

export default function Main() {
  return (
    <main className="">
      <div className="text-white pt-16 px-[10vw] lg:px-[10rem] h-[1450px] md:h-[2000px]">
        <Animation />
      </div>
      <About />
      <Transfer />
      <Contact />
    </main>
  );
}
