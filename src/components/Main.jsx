import React, { useEffect, useState } from "react";
import "../styles/main.css";
import Animation from "./Animation.jsx";

export default function Main() {
  return (
    <main className="">
      <div className="text-white pt-16 px-[10vw] lg:px-[10rem] h-[1500px]">
        <Animation />
      </div>
      <div className="px-[10vw] lg:px-[10rem]">
        <p className="text-white mt-10 mb-[1000px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p>
      </div>
    </main>
  );
}
