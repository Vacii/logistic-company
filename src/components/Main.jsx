import React, { useEffect, useState } from "react";
import "../styles/main.css";
import Animation from "./Animation.jsx";

export default function Main() {
  return (
    <main className="h-[2000px]">
      <div className="flex flex-col gap-5 items-start text-white px-[10vw] lg:px-[10rem]">
        <Animation />
      </div>
    </main>
  );
}
