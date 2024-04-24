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
  transition: { duration: 0.4 },
};

export const fadeInLoadingAnimation = {
  key: "fadeInLoading",
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0 },
  Exit: { opacity: 0 },
};

export const fadeInImage = {
  key: "fadeInImage",
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.4, delay: 0.2 },
};
