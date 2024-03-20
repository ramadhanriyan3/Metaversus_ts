"use client";

import { motion } from "framer-motion";
import { styles } from "@/utils";
import { staggerContainer, fadeIn, planetVariants } from "@/utils/motion";
import { TypingText, TitleText } from "./ui/Text";
import StartSteps from "./ui/StartSteps";
import { startingFeatures } from "@/constant";

const GetStarted = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer(0.1, 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`mx-auto flex lg:flex-row flex-col gap-8 ${styles.innerWidth}`}
      >
        <motion.div
          variants={planetVariants("left")}
          className={`${styles.flexCenter} flex-1`}
        >
          <img
            src="/get-started.png"
            alt="started"
            className="w-[90%] h-[90%] object-contain"
          />
        </motion.div>
        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] flex justify-center flex-col"
        >
          <TypingText title="| How Metaverse Works" style="" />
          <TitleText
            style=""
            content={<>Get Started with just a few clicks</>}
          />
          <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
            {startingFeatures.map((feature, index) => (
              <StartSteps key={feature} number={index + 1} text={feature} />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default GetStarted;
