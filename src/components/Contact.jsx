import React from "react";
import { motion } from "framer-motion";
import { BsTelephoneFill } from "react-icons/bs";
import { IoMailOutline } from "react-icons/io5";
import { ContactForm } from "./ContactForm";

export const Contact = () => {
  return (
    <section id="contact">
      <div className="py-16 px-10 lg:px-[10vw] z-[100]">
        <motion.h2
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="text-white text-4xl md:text-[4vw]  font-bold tracking-wide"
        >
          Kontaktujte nás
        </motion.h2>
        <div className="flex flex-col lg:flex-row justify-evenly items-center lg:h-[70vh] min-h-[500px]">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center lg:gap-10 w-full lg:w-[50%] my-10"
          >
            <a href="tel:+420608650760" className="text-white">
              <div className="flex flex-row gap-5 items-center justify-center ">
                <BsTelephoneFill className="text-white md:text-[2vw]" />
                <p className="md:text-[2vw]">+420 608 650 760</p>
              </div>
            </a>
            <a href="mailto:info@rivasped.cz">
              <div className="flex flex-row gap-5 items-center justify-center ">
                <IoMailOutline className="text-white md:text-[2vw]" />
                <p className="text-white md:text-[2vw]">info@rivasped.cz</p>
              </div>
            </a>

            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              className="flex flew-row justify-around lg:justify-center gap-10 lg:gap-[100px] items-start text-white mt-10"
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
          </motion.div>
          <ContactForm />
        </div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="flex items-center justify-center"
        >
          <p className="text-white mt-10">
            ©1990-{new Date().getFullYear()}, Rivasped s.r.o.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
