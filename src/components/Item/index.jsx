import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  background: "unset",
  ...theme.typography.body2,
}));

export default Item;
