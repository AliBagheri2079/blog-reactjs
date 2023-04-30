import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const HoverBackgroundButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary,
  borderRadius: "unset",
  padding: "5px",
  fontSize: "1rem",

  transition: "all 0.3s ease",
  position: "relative",
  zIndex: 1,

  "&::after": {
    content: '""',
    position: "absolute",
    inset: "0",
    zIndex: "-1",

    width: "100%",
    height: "0",
    backgroundColor: "#fff",
    transition: "all 0.3s ease",
  },

  "&:hover::after": {
    insetBlock: "auto 0",
    height: "100%",
  },

  ":active": {
    bottom: "2px",
  },
}));

export default HoverBackgroundButton;
