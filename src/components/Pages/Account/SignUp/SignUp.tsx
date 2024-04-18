import { fadeInAnimation } from "../../../UI/Animation/Animation";
import { ButtonPrimary } from "../../../UI/Buttons/Buttons";
import Styles from "./SignUp.module.css";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const ErrorMessage = ({ message }: { message: string }) => <p className={Styles.error}>{message}</p>;
  const InputDescription = () => <p className={Styles.inputDescription}>*At least 3 character needed.</p>;

  return (
    <motion.div {...fadeInAnimation} className={Styles.signUp}>
      <h1 className={Styles.pageTitle}>Create new account</h1>
      <p>Choose a unique username and password</p>
      <form
        className={Styles.signUp__form}
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <div className={Styles.row}>
          <input
            className={`${errors.username && Styles.errorInput}`}
            {...register("username", {
              minLength: { value: 3, message: "At least 3 character need to login." },
              required: "Username is required",
            })}
            minLength={3}
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
            {...register("password", { minLength: { value: 3, message: "At least 3 character need to create an account." }, required: "Password is required" })}
            type="password"
            name="password"
            placeholder="Password"
          />
          {errors.password && <ErrorMessage message={errors.password && errors.password.message} />}
          {!errors.password && <InputDescription />}
        </div>

        <ButtonPrimary>Create new account</ButtonPrimary>
      </form>
    </motion.div>
  );
}

export default SignUp;
