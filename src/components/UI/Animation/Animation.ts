import { ExitToApp } from "@mui/icons-material";
import { duration } from "@mui/material";

export const searchBarAnimation = {
  key: "searchBar",
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export const navigationAnimation = {
  key: "navigation",
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
  exit: { opacity: 0, y: -20 },
};
export const basketAnimation = {
  key: "searchBar",
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export const fadeInAnimation = {
  key: "fadeIn",
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.7 },
};

export const fadeInLoadingAnimation = {
  key: "fadeInLoading",
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0 },
  Exit: { opacity: 0 },
};

export const fadeInItemPage = {
  key: "fadeInItemPage",
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.4, delay: 0.2 },
};

export const fadeInNotFoundMessage = {
  key: "fadeInNotFoundMessage",
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.4, delay: 1 },
};

export const fadeInSearchProductItemAnimation = {
  key: "fadeInSearchProductItemAnimation",
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.4, delay: 1 },
};

export const basketItemAnimation = {
  key: "basketItemAnimation",
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.3 },
};
