import { motion } from "framer-motion";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useClickAway } from "react-use";
import arrowIcon from "../../../assets/icons/arrow-right.svg";
import { useGlobalContext } from "../../../context/globalContext";
import { animationOpacity } from "../Animation/Animation";
import { ButtonOutline, ButtonPrimary, CloseButton } from "../Buttons/Buttons";
import Styles from "./ModalRedirection.module.css";

function ModalRedirection() {
  const { uiToggle, setUiToggle } = useGlobalContext();
  const { isModalRedirectionShow } = uiToggle;
  const navigate = useNavigate();

  const onClickRedirectToLoginHandler = () => {
    if (isModalRedirectionShow) {
      setUiToggle((prevData: any) => {
        return { ...prevData, isModalRedirectionShow: false, isLoadingFullViewShow: true };
      });
      setTimeout(() => {
        setUiToggle((prevData: any) => {
          return { ...prevData, isLoadingFullViewShow: false };
        });
        navigate("account/signup");
      }, 500);
    }
  };

  const ref = useRef(null);
  useClickAway(ref, () => {
    if (isModalRedirectionShow) {
      setUiToggle((prevData: any) => {
        return { ...prevData, isModalRedirectionShow: false };
      });
    }
  });

  const closeButtonHandler = () => {
    setUiToggle((prevData: any) => {
      return { ...prevData, isModalRedirectionShow: false };
    });
  };

  return (
    <div className={Styles.modalContainer}>
      <motion.div {...animationOpacity} className={Styles.cardContainer} ref={ref}>
        <div className={Styles.cardContainer__header}>
          <h2>Wishlist Menu</h2>
        </div>
        <div className={Styles.cardContainer__detail}>
          <p>To add this item to your wishlist you need to login first.</p>
        </div>
        <div className={Styles.cardContainer__footer}>
          <ButtonPrimary style={{ backgroundColor: "#00deb0" }} disabled={false} onClick={onClickRedirectToLoginHandler}>
            Login
          </ButtonPrimary>
          <ButtonOutline icon={arrowIcon} onClick={closeButtonHandler}>
            Continue without Login
          </ButtonOutline>
        </div>
        <div className={Styles.cardContainer__closeButton}>
          <CloseButton onClick={closeButtonHandler}></CloseButton>
        </div>
      </motion.div>
    </div>
  );
}

export default ModalRedirection;
