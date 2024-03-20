"use client";

import { motion } from "framer-motion";
import { styles } from "@/utils";
import { staggerContainer } from "@/utils/motion";
import { TypingText, TitleText } from "./ui/Text";
import InsightCard from "./ui/InsightCard";
import { insights } from "@/constant";

const Insight = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer(0.1, 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`mx-auto flex flex-col gap-8 ${styles.innerWidth}`}
      >
        <TypingText title="| Insight" style="text-center" />
        <TitleText content={<>Insight about metaverse</>} style="text-center" />
        <div className="mt-[50px] flex flex-col gap-[30px]">
          {insights.map((insight, index) => (
            <InsightCard
              key={`insight-${index}`}
              {...insight}
              index={index + 1}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Insight;
