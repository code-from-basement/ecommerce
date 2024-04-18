import { fadeInAnimation } from "../../../UI/Animation/Animation";
import Styles from "./UserProfile.module.css";
import { motion } from "framer-motion";
function UserProfile() {
  return (
    <motion.div {...fadeInAnimation} className={Styles.userProfile}>
      <h1 className={Styles.pageTitle}>Welcome, Mahyar Nafisi</h1>
      <p>You are logged In</p>
    </motion.div>
  );
}

export default UserProfile;
