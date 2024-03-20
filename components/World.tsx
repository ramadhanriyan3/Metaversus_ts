"use client";

import { motion } from "framer-motion";
import { styles } from "@/utils";
import { staggerContainer, fadeIn } from "@/utils/motion";
import { TypingText, TitleText } from "./ui/Text";

const World = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer(0.1, 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`mx-auto flex flex-col gap-8 ${styles.innerWidth}`}
      >
        <TypingText title="| People on the world" style="text-center" />
        <TitleText
          content={
            <>Track friends around you and invite them to play together</>
          }
          style="text-center"
        />

        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className="relative mt-[68px] flex w-full h-[550px]"
        >
          <img
            src="/map.png"
            alt="map"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] shadow-neon">
            <img src="/people-01.png" alt="pople" className="w-full h-full " />
          </div>
          <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] shadow-neon">
            <img src="/people-02.png" alt="pople" className="w-full h-full" />
          </div>
          <div className="absolute top-1/2 left-[40%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] shadow-neon">
            <img src="/people-03.png" alt="pople" className="w-full h-full" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default World;
