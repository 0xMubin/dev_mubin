import { motion } from "motion/react";
import { fadeInRight } from "../data/variants";
import React from "react";

const Footer = () => {
  return (
    <motion.footer
      variants={fadeInRight}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true }}
      className="bg-neutral-950 border-t border-neutral-600 text-neutral-100 text-center py-6 "
    >
      <div className="text-sm">
        Made With ❤️ by Muntasir Mubin
      </div>
    </motion.footer>
  );
};

export default Footer;
