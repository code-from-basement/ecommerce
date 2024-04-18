import { fadeInAnimation } from "../../../UI/Animation/Animation";
import { ButtonPrimary } from "../../../UI/Buttons/Buttons";
import Styles from "./Login.module.css";
import { motion } from "framer-motion";

function Login() {
  return (
    <motion.div {...fadeInAnimation} className={Styles.login}>
      <h1 className={Styles.pageTitle}>Login</h1>
      <p>login through your gmail account</p>
      <form className={Styles.login__form}>
        <input type="text" name="username in login page" placeholder="Username" />
        <input type="password" name="password in login page" placeholder="Password" />
        <ButtonPrimary>Login to you account</ButtonPrimary>
      </form>
    </motion.div>
  );
}

export default Login;
