"use client";

import { motion } from "framer-motion";
import { styles } from "@/utils";
import { textContainer, textVariant2 } from "@/utils/motion";
import { ReactNode } from "react";

interface textProps {
  title?: string;
  style: string;
  content?: ReactNode;
}

export const TypingText = (props: textProps) => (
  <>
    <motion.p
      variants={textContainer}
      className={`font-normal text-[14px] text-secondary-white ${props.style}`}
    >
      {Array.from(props.title!).map((letter, index) => (
        <motion.span variants={textVariant2} key={index}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.p>
  </>
);

export const TitleText = (props: textProps) => (
  <>
    <motion.h2
      variants={textVariant2}
      initial="hidden"
      whileInView="show"
      className={`mt-2 font-bold md:text-[64px] text-[40px] text-white ${props.style}`}
    >
      {props.content}
    </motion.h2>
  </>
);
