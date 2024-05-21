import useLogout from "../../../../hooks/useLogout";
import { fadeInAnimation } from "../../../UI/Animation/Animation";
import { ButtonPrimary } from "../../../UI/Buttons/Buttons";
import Styles from "./UserProfile.module.css";
import { motion } from "framer-motion";
function UserProfile() {
  const { isLoading, logoutHandler } = useLogout();
  return (
    <motion.div {...fadeInAnimation} className={Styles.userProfile}>
      <h1 className={Styles.pageTitle}>Welcome, Mahyar Nafisi</h1>
      <p>You are logged In</p>
      <ButtonPrimary disabled={isLoading} onClick={logoutHandler}>
        Logout
      </ButtonPrimary>
    </motion.div>
  );
}

export default UserProfile;
