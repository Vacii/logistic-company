import React from "react";
import { motion } from "framer-motion";
import { BsTelephoneFill } from "react-icons/bs";
import { IoMailOutline } from "react-icons/io5";

export const Contact = () => {
  return (
    <section id="contact">
      <div className="content py-10 px-10">
        <motion.h2
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="text-white text-4xl font-bold tracking-wide"
        >
          Kontaktujte nás
        </motion.h2>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-5 mt-10"
        >
          <div className="flex flex-row gap-5 items-center justify-start w-44">
            <BsTelephoneFill className="text-white" />
            <h2 className="text-white">+420 608 650 760</h2>
          </div>
          <div className="flex flex-row gap-5 items-center justify-start w-44">
            <IoMailOutline className="text-white" />
            <h2 className="text-white">info@rivasped.cz</h2>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="flex flew-row justify-around items-start text-white mt-10"
        >
          <div className="flex flex-col">
            <p>Rivasped s.r.o.</p>
            <p>Rybná 716/24</p>
            <p>Staré Město</p>
            <p>Praha 110 00</p>
          </div>
          <div className="flex flex-col">
            <p>IČO: 08753326</p>
            <p>DIČ: CZ08753326</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
