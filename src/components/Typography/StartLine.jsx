import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const TypographyStartLine = styled(Typography)(() => ({
  position: "relative",
  fontSize: "calc(0.6vw + 0.5rem)",
  paddingInlineStart: "0.8rem",

  "&::before": {
    content: '""',
    position: "absolute",
    inset: "0 auto 0 0",

    height: "100%",
    width: "0.15vw",
    backgroundColor: "#ff98a2",
  },
}));

export default TypographyStartLine;
