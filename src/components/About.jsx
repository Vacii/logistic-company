import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import Marquee from "./Marquee";

export const About = () => {
  return (
    <section id="about" className="w-full mt-10">
      <div className="content py-10 px-10">
        <motion.h2
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="text-white text-4xl font-bold tracking-wide"
        >
          Kdo jsme?
        </motion.h2>

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col items-center mt-16 gap-5"
        >
          <h2 className="text font-bold text-custom-yellow text-7xl">
            <CountUp end={32} enableScrollSpy={true} scrollSpyOnce={true} />+
          </h2>
          <div className="flex flex-col items-center gap-4">
            <p className=" text-white font-bold text-xl">
              To je počet let naší praxe!
            </p>
            <p className="text-white text-justify text-lg">
              Naše dlouholeté zkušenosti a odbornost nám umožňují poskytovat
              nejlepší služby a řešení pro naše klienty. S Rivasped s.r.o.
              získáváte více než jen dopravu – získáváte partnera s bohatými
              zkušenostmi, který vám pomůže dosáhnout vašich logistických cílů.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-row items-center justify-around mt-20"
        >
          <div className="flex flex-col items-center">
            <h2 className="text font-bold text-custom-yellow text-6xl">
              <CountUp end={180} enableScrollSpy={true} scrollSpyOnce={true} />+
            </h2>
            <p className=" text-white font-bold text-md">Spokojených klientů</p>
          </div>

          <div className="flex flex-col items-center pr-3">
            <h2 className="text font-bold text-custom-yellow text-6xl">
              <CountUp end={3} enableScrollSpy={true} scrollSpyOnce={true} />
            </h2>
            <p className=" text-white font-bold text-md">Počet zemí</p>
          </div>

          {/* <div className="flex flex-col items-center gap-4"> */}

          {/* <p className="text-white text-justify text-lg">
              Získali jsme si důvěru a podporu více než 180 spokojených klientů.
              Co nás odlišuje, je naše individuální péče. Nejde nám jen o
              přepravu zboží, ale o vaše jedinečné potřeby a požadavky.
            </p> */}
          {/* </div> */}
        </motion.div>
      </div>
      <Marquee />
    </section>
  );
};
