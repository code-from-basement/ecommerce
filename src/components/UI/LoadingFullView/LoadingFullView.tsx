import { fadeInAnimation, fadeInLoadingAnimation } from "../Animation/Animation";
import Styles from "./LoadingFullView.module.css";
import { motion } from "framer-motion";

export default function LoadingFullView() {
  return (
    <motion.div {...fadeInLoadingAnimation} className={Styles.loadingFullView}>
      <motion.span {...fadeInAnimation} className={Styles.loader}></motion.span>
      <motion.h2>Loading...</motion.h2>
    </motion.div>
  );
}
