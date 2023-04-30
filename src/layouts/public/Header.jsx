import { HoverBackgroundButton } from "@/components/Button";
import { LenisIcon, SFDIcon } from "@/components/Icons";
import Item from "@/components/Item";
import { TypographyStartLine } from "@/components/Typography";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import GitHubIcon from "@mui/icons-material/GitHub";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import PropTypes from "prop-types";

import Navbar from "./Navbar";

const TopSection = ({ laptopMatches }) => {
  return (
    <Item sx={{ mt: "2.5vh" }}>
      <Grid container justifyContent="space-between">
        <Grid item xs>
          <Item>
            <LenisIcon />
          </Item>
        </Grid>

        <Grid item xs={2}>
          <Item>
            <Navbar />
          </Item>
        </Grid>
      </Grid>

      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
        spacing={2}
        sx={{ mt: 2 }}
      >
        <Item sx={{ mt: 0.5 }}>
          <SFDIcon />
        </Item>

        <Item sx={{ textAlign: "end" }}>
          <Typography variant="h2" sx={{ fontSize: "max(4vw, 2rem)" }}>
            Smooth Scroll
          </Typography>

          <Typography
            variant={laptopMatches ? "subtitle1" : "caption"}
            className="font-slussen-stencil-semibold-trial"
            display="block"
            color="GrayText"
            gutterBottom
          >
            &copy; 2023 Studio Freight
          </Typography>
        </Item>
      </Stack>
    </Item>
  );
};
TopSection.propTypes = {
  laptopMatches: PropTypes.bool.isRequired,
};

const BottomSection = ({ laptopMatches }) => {
  /*
    NOTE: For wrapper 
    TODO: Delete placeholders
    TODO: column direction (md >= row direction)
      
    NOTE: For two main item (text and button) 
    TODO: width 100% (md >= width 50%) 
  */

  const GitHubIconWrapper = (
    <Item
      sx={{
        bgcolor: "black",
        borderRadius: "unset",
        p: "0.5rem",
      }}
    >
      <GitHubIcon sx={{ fontSize: "2rem" }} />
    </Item>
  );

  return (
    <Item>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="stretch"
        sx={{
          flexWrap: "wrap",
          mb: "calc(1.5vw + 0.5rem)",
        }}
      >
        <Stack flex="425px" direction="row" alignItems="stretch">
          <TypographyStartLine
            variant="h6"
            sx={{
              display: { xs: "none", md: "revert" },
            }}
            flex="0 1 130px"
            mr="5vw"
          >
            scroll to explore
          </TypographyStartLine>

          <Typography
            variant={laptopMatches ? "body2" : "body1"}
            sx={{ marginBlockEnd: { xs: "1rem", md: "initial" } }}
            flex="1 1 150px"
          >
            A new smooth scroll library fresh out of the Studio Freight Darkroom
          </Typography>

          <Item
            sx={{
              display: { xs: "none", md: "revert" },
              flex: "1 1 140px",
            }}
          />
        </Stack>

        <Stack flex="425px" direction="row" alignItems="stretch">
          <Item
            sx={{
              display: { xs: "none", md: "revert" },
              flex: "1 1 50px",
            }}
          />

          <HoverBackgroundButton
            variant="contained"
            href="#contained-buttons"
            sx={{
              flex: "1 0 200px",
              justifyContent: "space-between",
              pl: "8px",
              pr: "20px",
            }}
            startIcon={GitHubIconWrapper}
            endIcon={<ArrowOutwardIcon />}
            // color="primary"
            // size="large"
          >
            check it out on github
          </HoverBackgroundButton>
        </Stack>
      </Stack>
    </Item>
  );
};
BottomSection.propTypes = {
  laptopMatches: PropTypes.bool.isRequired,
};

const Header = () => {
  /*
    NOTE: For wrapper 
    TODO: Switch to Grid System
  */
  const laptopMatches = useMediaQuery(theme => theme.breakpoints.up("md"));

  return (
    <Box
      sx={{
        width: "100%",
        px: "2.7vw",
      }}
    >
      <Stack
        direction="column"
        justifyContent="space-between"
        alignItems="stretch"
        spacing={2}
        sx={{ height: "100vh" }}
      >
        <TopSection laptopMatches={laptopMatches} />
        <BottomSection laptopMatches={laptopMatches} />
      </Stack>
    </Box>
  );
};

export default Header;
