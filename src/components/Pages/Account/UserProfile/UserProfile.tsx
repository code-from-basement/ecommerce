import { motion } from "framer-motion";
import useLogout from "../../../../hooks/useLogout";
import { fadeInAnimation } from "../../../UI/Animation/Animation";
import { ButtonPrimary } from "../../../UI/Buttons/Buttons";
import Styles from "./UserProfile.module.css";
import { useAuthContext } from "../../../../context/authContext";
function UserProfile() {
  const { authUser } = useAuthContext();
  const { isLoading, logoutHandler } = useLogout();
  let profilePictureLInkInLocalstorge = localStorage.getItem("userData");
  profilePictureLInkInLocalstorge = JSON.parse(profilePictureLInkInLocalstorge ?? "");
  console.log(profilePictureLInkInLocalstorge);
  return (
    <motion.div {...fadeInAnimation} className={Styles.userProfile}>
      <div className={Styles.userProfile__userImage}>
        <img
          src={authUser.profilePicture || profilePictureLInLocalstorge.profilePicture}
          alt="profile picture of user"
          aria-label="profile picture of the logged in user."
        />
      </div>
      <h1 className={Styles.pageTitle}>Welcome, user {authUser.username}</h1>
      <p>You are logged In</p>
      <ButtonPrimary disabled={isLoading} onClick={() => logoutHandler(authUser?._id)}>
        Logout
      </ButtonPrimary>
    </motion.div>
  );
}

export default UserProfile;
