"use client";

import { motion } from "framer-motion";
import { styles } from "@/utils";
import { staggerContainer, fadeIn, planetVariants } from "@/utils/motion";
import { TypingText, TitleText } from "./ui/Text";
import NewFeatures from "./ui/NewFeatures";
import { newFeatures } from "@/constant";

const WhatsNew = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer(0.1, 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col-reverse gap-8`}
      >
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="flex-[0.75] flex justify-center flex-col"
        >
          <TypingText title="| What's Nesw?" style="" />
          <TitleText style="" content={<>What's new about metaversus</>} />
          <div className="mt-[48px] flex flex-wrap gap-[24px] justify-between">
            {newFeatures.map((feature, index) => (
              <NewFeatures key={feature.title} {...feature} />
            ))}
          </div>
        </motion.div>
        <motion.div
          variants={planetVariants("right")}
          className={`${styles.flexCenter} flex-1`}
        >
          <img
            src="/whats-new.png"
            alt="whats-new"
            className="w-[90%] h-[90%] object-contain"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhatsNew;
