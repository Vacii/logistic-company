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
    </section>
  );
};
