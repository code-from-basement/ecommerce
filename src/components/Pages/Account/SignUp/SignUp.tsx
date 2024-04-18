import { fadeInAnimation } from "../../../UI/Animation/Animation";
import { ButtonPrimary } from "../../../UI/Buttons/Buttons";
import Styles from "./SignUp.module.css";
import { motion } from "framer-motion";

function SignUp() {
  return (
    <motion.div {...fadeInAnimation} className={Styles.signUp}>
      <h1 className={Styles.pageTitle}>Create new account</h1>
      <p>Choose a unique username and password</p>
      <form className={Styles.signUp__form}>
        <input minLength={3} type="text" name="username in login page" placeholder="Username" />
        <input type="password" name="password in login page" placeholder="Password" />
        <ButtonPrimary>Create new account</ButtonPrimary>
      </form>
    </motion.div>
  );
}

export default SignUp;
