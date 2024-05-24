import { motion } from "framer-motion";
import useLogout from "../../../../hooks/useLogout";
import { fadeInAnimation } from "../../../UI/Animation/Animation";
import { ButtonPrimary } from "../../../UI/Buttons/Buttons";
import Styles from "./UserProfile.module.css";
function UserProfile() {
  const { isLoading, logoutHandler } = useLogout();
  let profilePictureLInkInLocalstorge = localStorage.getItem("userData");
  profilePictureLInkInLocalstorge = JSON.parse(profilePictureLInkInLocalstorge);
  console.log(profilePictureLInkInLocalstorge);
  return (
    <motion.div {...fadeInAnimation} className={Styles.userProfile}>
      <div className={Styles.userProfile__userImage}>
        <img
          src={profilePictureLInkInLocalstorge?.profilePicture}
          alt="profile picture of user"
          aria-label="profile picture of the logged in user."
        />
      </div>
      <h1 className={Styles.pageTitle}>Welcome, Mahyar Nafisi</h1>
      <p>You are logged In</p>
      <ButtonPrimary disabled={isLoading} onClick={logoutHandler}>
        Logout
      </ButtonPrimary>
    </motion.div>
  );
}

export default UserProfile;
