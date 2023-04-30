import SvgIcon from "@mui/material/SvgIcon";

const Lines = props => {
  return (
    <SvgIcon
      {...props}
      className="hamburger-btn__icon"
      fill="none"
      stroke="none"
      viewBox="-10 -10 120 120"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="hamburger-btn__icon__lines"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m 20 40 h 60 a 1 1 0 0 1 0 20 h -60 a 1 1 0 0 1 0 -40 h 30 v 70"
      />
    </SvgIcon>
  );
};

const LinesIcon = () => {
  return (
    <Lines
      sx={{
        color: "transparent",
        width: "unset",
        height: "unset",
        stroke: "white",
      }}
    />
  );
};

export default LinesIcon;
