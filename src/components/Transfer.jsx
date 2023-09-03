import React from "react";
import { motion } from "framer-motion";

export const Transfer = () => {
  return (
    <section id="cargo">
      <div className="py-10 px-10">
        <motion.h2
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="text-white text-4xl font-bold tracking-wide"
        >
          Co převážíme?
        </motion.h2>
      </div>
      <div className="w-full flex flex-col justify-center items-center pt-24">
        <div className="flex flex-col justify-center items-center gap-5 bg-white bg-opacity-20 backdrop-blur-lg w-[90%] max-w-[400px] rounded-2xl shadow-2xl pb-10">
          <img
            src="src/assets/paleta.webp"
            alt="paleta_ilustrace"
            className="w-3/4 mt-[-100px]"
          />
          <h2 className="text-custom-yellow text-3xl font-bold">
            Zboží na paletách
          </h2>

          <p className="text-white text-md px-10">
            Naše vozy spolehlivě přepravují až 18 euro palet najednou. Můžete se
            tak spolehnout, že zvládneme spolehlivě převést i větší množství
            nákladu.
          </p>
        </div>
      </div>
    </section>
  );
};
