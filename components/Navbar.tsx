"use client";

import { motion } from "framer-motion";
import { styles } from "@/utils";
import { navVariants } from "@/utils/motion";
import Image from "next/image";

const Navbar = () => {
  console.log(styles.xPaddings);
  return (
    <motion.nav
      variants={navVariants}
      initial={"hidden"}
      whileInView={"show"}
      className={`py-8 ${styles.xPaddings} relative`}
    >
      <div className="inset-0 w-[50%] absolute gradient-01" />
      <div
        className={`${styles.innerWidth} mx-auto justify-between flex gap-8`}
      >
        <Image src={"/search.svg"} alt="search" width={24} height={24} />
        <h2 className="font-extrabold text-white text-[24px] leading-[30px]">
          METAVERSUS
        </h2>
        <Image
          src={"/menu.svg"}
          alt="menu"
          width={24}
          height={24}
          className="object-contain"
        />
      </div>
    </motion.nav>
  );
};

export default Navbar;
