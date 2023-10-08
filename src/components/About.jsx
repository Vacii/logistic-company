import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import Marquee from "./Marquee";

import "../styles/about.css";

export const About = () => {
  return (
    <section id="about" className="w-full mt-10">
      <div className="content py-10 px-10 lg:px-[10vw]">
        <motion.h2
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="text-white text-4xl md:text-[4vw] font-bold tracking-wide"
        >
          Kdo jsme?
        </motion.h2>
        <div className="flex flex-col lg:flex-row justify-center lg:pt-10 my-16 lg:gap-10">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="glow flex flex-col items-center justify-center gap-5 lg:gap-7 lg:w-[350px] lg:h-[550px] lg:p-7 lg:bg-gray-800 rounded-2xl"
          >
            <h2 className="text font-bold text-custom-yellow text-7xl">
              <CountUp end={32} enableScrollSpy={true} scrollSpyOnce={true} />+
            </h2>
            <div className="flex flex-col items-center gap-4">
              <p className=" text-white font-bold text-xl uppercase">
                To je počet let naší praxe!
              </p>
              <p className="text-white text-justify text-lg">
                Naše dlouholeté zkušenosti a odbornost nám umožňují poskytovat
                nejlepší služby a řešení pro naše klienty. S Rivasped s.r.o.
                získáváte více než jen dopravu – získáváte partnera s bohatými
                zkušenostmi, který vám pomůže dosáhnout vašich logistických
                cílů.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-row lg:flex-col items-center justify-around lg:justify-between mt-20 lg:mt-0"
          >
            <div className="lg:h-[48%] lg:w-96 xl:w-[550px] w-fit lg:bg-gray-800 rounded-2xl">
              <div className="flex flex-col items-center justify-center h-full w-full bg-image-networking rounded-2xl">
                <h2 className="text font-bold text-custom-yellow text-6xl lg:text-7xl">
                  <CountUp
                    end={180}
                    enableScrollSpy={true}
                    scrollSpyOnce={true}
                  />
                  +
                </h2>
                <p className=" text-white font-bold text-md lg:text-lg uppercase">
                  Spokojených klientů
                </p>
              </div>
            </div>

            <div className="pr-3 lg:pr-0 justify-center lg:h-[48%] lg:w-96 xl:w-[550px] lg:bg-gray-800 rounded-2xl">
              <div className="flex flex-col items-center justify-center h-full w-full bg-image-eu rounded-2xl">
                <h2 className="text font-bold text-custom-yellow text-6xl lg:text-7xl">
                  <CountUp
                    end={3}
                    enableScrollSpy={true}
                    scrollSpyOnce={true}
                  />
                </h2>
                <p className=" text-white font-bold text-md lg:text-lg uppercase">
                  Počet zemí
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <Marquee />
    </section>
  );
};
