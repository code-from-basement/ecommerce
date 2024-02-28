import { ButtonPrimary } from "../../../UI/Buttons/Buttons";
import Styles from "./Login.module.css";

function Login() {
  return (
    <div className={Styles.login}>
      <h1 className={Styles.pageTitle}>Login</h1>
      <p>login through your gmail account</p>
      <ButtonPrimary>Login with Gmail</ButtonPrimary>
    </div>
  );
}

export default Login;
