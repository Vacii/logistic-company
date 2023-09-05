import React from "react";
import { motion } from "framer-motion";

export const Transfer = () => {
  return (
    <section id="cargo">
      <div className="py-10 px-10 lg:px-[10vw] min-h-[600px] lg:h-[80vh] max-h-[1500px]">
        <motion.h2
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="text-white text-4xl md:text-[4vw]  font-bold tracking-wide"
        >
          Co převážíme?
        </motion.h2>

        <div className="w-full h-full flex flex-col lg:flex-row justify-center items-center gap-32 mt-32 lg:mt-0">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="flex relative flex-col justify-center items-center z-10 gap-5 bg-gray-800 backdrop-blur-lg w-[90%] max-w-[400px] h-fit md:h-[400px] lg:h-[450px] rounded-2xl shadow-2xl lg:pb-0 lg:mt-10"
          >
            <img
              src="src/assets/paleta.webp"
              alt="paleta_ilustrace"
              className="w-3/4 mt-[-100px]"
            />
            <h2 className="text-custom-yellow text-3xl font-bold text-center">
              Zboží na paletách
            </h2>

            <p className="text-white text-justify text-md px-10 pb-10">
              Naše vozy spolehlivě přepravují až 18 euro palet najednou. Můžete
              se tak spolehnout, že zvládneme spolehlivě převést i větší
              množství nákladu.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="flex relative flex-col justify-center items-center z-10 gap-5 bg-gray-800 backdrop-blur-lg w-[90%] max-w-[400px] h-fit md:h-[400px] lg:h-[450px] rounded-2xl shadow-2xl lg:pb-0 lg:mt-10"
          >
            <img
              src="src/assets/steel_beems.webp"
              alt="paleta_ilustrace"
              className="w-3/4 mt-[-80px] lg:mt-[-100px]"
            />
            <h2 className="text-custom-yellow text-3xl font-bold text-center">
              Velkometrážní zboží
            </h2>

            <p className="text-white text-justify text-md px-10 pb-10">
              Naše vozidla jsou připravena přepravit zboží od 1 kg do 7 tun.
              Můžete mít tak jistotu, že zvládname přepravit vše, co byste
              potřebovali.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
