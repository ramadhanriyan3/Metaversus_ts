"use client";

import { motion } from "framer-motion";
import { styles } from "@/utils";
import { fadeIn } from "@/utils/motion";
import Image from "next/image";

interface exploreCardProps {
  id: string;
  imgUrl: string;
  title: string;
  index: number;
  active: string;
  handleClick: React.Dispatch<React.SetStateAction<string>>;
}

const ExploreCard = (props: exploreCardProps) => {
  return (
    <>
      <motion.div
        variants={fadeIn("right", "spring", props.index * 0.5, 0.75)}
        className={`relative ${
          props.active === props.id
            ? "lg:flex-[3.5] flex-[10]"
            : "lg:flex-[0.5] flex-[2]"
        } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex]
    duration-[0.7s] ease-out-flex cursor-pointer`}
        onClick={() => props.handleClick(props.id)}
      >
        <img
          src={props.imgUrl}
          alt={props.title}
          className="absolute w-full h-full object-cover rounded-[24px]"
        />
        {props.active !== props.id ? (
          <h3
            className="font-semibold sm:text-[26px] text-[18px]
            text-white absolute z-0 lg:bottom-20 lg:-rotate-90 lg:origin-[0,0]"
          >
            {props.title}
          </h3>
        ) : (
          <div
            className="absolute bottom-0 p-8 justify-start w-full flex-col 
          bg-[rgba(0,0,0,0.5)] rounded-b-[24px]"
          >
            <div
              className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px]`}
            >
              <img
                src="/headset.svg"
                alt="headset"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
            <p className="font-normat text-[16px] leading-[20px] text-white uppercase">
              Enter The Metaverse
            </p>
            <h2 className="mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white">
              {props.title}
            </h2>
          </div>
        )}
      </motion.div>
    </>
  );
};

export default ExploreCard;
