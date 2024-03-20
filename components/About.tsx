"use client";

import { motion } from "framer-motion";
import { styles } from "@/utils";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { TypingText } from "./ui/Text";

const About = () => {
  return (
    <section id="about" className={`${styles.paddings} relative z-10`}>
      <div className="gradient-02 z-0" />
      <motion.div
        variants={staggerContainer(0.1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} ${styles.flexCenter} flex-col mx-auto`}
      >
        <TypingText
          title="| About Metaversus"
          style="text-center text-[24px] font-extrabold"
        />
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-[8px] font-normar sm:text-[32px] text-[20px] text-secondary-white text-justify"
        >
          <span className="font-extrabold text-white">Metaverse</span> is a new
          thing in the future, where you can enjoy the virtual world, because
          this is really the{" "}
          <span className="font-extrabold text-white">
            madness of the metaverse
          </span>{" "}
          of today, using only{" "}
          <span className="font-extrabold text-white">VR</span> devices you can
          easily explore the metaverse world you want, turn your dreams into
          reality. Let's{" "}
          <span className="font-extrabold text-white">explore</span> the madness
          of the metaverse by scrolling down.
        </motion.p>
        <motion.img
          src="/arrow-down.svg"
          alt="arrowDown"
          className="w-[18px] h-[28px] object-contain mt-[28px]"
          variants={fadeIn("up", "tween", 0.3, 1)}
        />
      </motion.div>
    </section>
  );
};

export default About;
