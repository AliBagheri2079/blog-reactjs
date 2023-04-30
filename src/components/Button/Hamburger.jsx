import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const HamburgerButton = styled(Button)(() => ({
  backgroundColor: "initial",
  borderRadius: "unset",
  padding: "0",

  width: "100%",
  overflow: "hidden",

  "&:hover": {
    backgroundColor: "initial",
  },

  "& .hamburger-btn__icon": {
    transition: "translate 1s, rotate 1s",
  },

  "& .hamburger-btn__icon__lines": {
    transition: "1s",
    strokeDasharray: "60 31 60 300",
  },

  "&[aria-expanded='true']": {
    "& .hamburger-btn__icon": {
      translate: "10px -10px",
      rotate: "0.125turn",
    },

    "& .hamburger-btn__icon__lines": {
      strokeDasharray: "60 105 60 300",
      strokeDashoffset: "-90",
    },
  },
}));

export default HamburgerButton;
