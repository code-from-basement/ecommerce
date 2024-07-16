import { Link } from "react-router-dom";
import { fadeInAnimation } from "../../../UI/Animation/Animation";
import { ButtonPrimary } from "../../../UI/Buttons/Buttons";
import Styles from "./Login.module.css";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import useLogin from "../../../../hooks/useLogin";
import { useEffect } from "react";

function Login() {
  const { isLoading, loginHandler } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    document.title = "Sign In - Login to your account";
    window.scrollTo(0, 0);
  }, []);

  const ErrorMessage = ({ message }: { message: string }) => <p className={Styles.error}>{message}</p>;
  const InputDescription = () => <p className={Styles.inputDescription}>*At least 3 character needed.</p>;

  return (
    <motion.div {...fadeInAnimation} className={Styles.login}>
      <h1 className={Styles.pageTitle}>Login</h1>
      <p>login to your Nuphy account</p>

      <form
        className={Styles.login__form}
        onSubmit={handleSubmit((currentUserData: any) => {
          loginHandler(currentUserData);
        })}
      >
        <div className={Styles.row}>
          <input
            className={`${errors.username && Styles.errorInput}`}
            {...register("username", {
              minLength: { value: 3, message: "At least 3 character need to login." },
              required: "Username is required",
            })}
            type="text"
            name="username"
            placeholder="Username"
          />
          {errors.username && <ErrorMessage message={errors.username && errors.username.message} />}
          {!errors.username && <InputDescription />}
        </div>
        <div className={Styles.row}>
          <input
            className={`${errors.password && Styles.errorInput}`}
            {...register("password", {
              minLength: { value: 3, message: "At least 3 character need to login in." },
              required: "Password is required",
            })}
            type="password"
            name="password"
            placeholder="Password"
          />
          {errors.password && <ErrorMessage message={errors.password && errors.password?.message} />}
          {!errors.password && <InputDescription />}
        </div>

        <ButtonPrimary onClick={() => {}} disabled={isLoading}>
          {isLoading ? "loading..." : "Login"}
        </ButtonPrimary>
      </form>
      <div className={Styles.login__cta}>
        <h2>Don't have an account?</h2>
        <Link to="/account/signup">Sign up</Link>
      </div>
    </motion.div>
  );
}

export default Login;
