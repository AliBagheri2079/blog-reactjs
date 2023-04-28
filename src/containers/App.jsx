import NasaParticle from "@/components/Particles/NasaParticle";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function BasicGrid() {
  return (
    <>
      {/* <Typography noWrap> */}
      <Container maxWidth="xl">
        <Box
          display="grid"
          gridTemplateColumns="repeat(4, 1fr)"
          gridTemplateRows="repeat(2, 1fr)"
          gridAutoFlow="row"
          gridTemplateAreas={`
          "Svg-Header Svg-Header Svg-Header Nav-Toggle"
          "Description Description Titles Titles"
          `}
          gap={2}
          alignItems="stretch"
          sx={{ height: "100vh" }}
        >
          <Box gridArea="Svg-Header">
            <Typography
              variant="h1"
              className="font-slussen-stencil-semibold-trial uppercase italic text-lenis"
              sx={{ fontSize: "max(20vw, 20px)" }}
            >
              lenis
            </Typography>

            {/* <Box sx={{ width: "100%", maxWidth: 500 }}>
              <Typography variant="h1" gutterBottom>
                h1. Heading
              </Typography>
              <Typography variant="h6" gutterBottom>
                h6. Heading
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Quos blanditiis tenetur
              </Typography>
              <Typography variant="subtitle2" gutterBottom>
                subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Quos blanditiis tenetur
              </Typography>
              <Typography variant="body1" gutterBottom>
                body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quos blanditiis tenetur unde suscipit, quam beatae rerum
                inventore consectetur, neque doloribus, cupiditate numquam
                dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
              </Typography>
              <Typography variant="body2" gutterBottom>
                body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quos blanditiis tenetur unde suscipit, quam beatae rerum
                inventore consectetur, neque doloribus, cupiditate numquam
                dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
              </Typography>
              <Typography variant="button" display="block" gutterBottom>
                button text
              </Typography>
              <Typography variant="caption" display="block" gutterBottom>
                caption text
              </Typography>
              <Typography variant="overline" display="block" gutterBottom>
                overline text
              </Typography>
            </Box> */}
          </Box>

          <Box gridArea="Nav-Toggle">
            <Item>Nav Toggle</Item>
          </Box>

          <Box
            container
            display="grid"
            gridTemplateColumns="repeat(3, 1fr)"
            gridTemplateRows="repeat(3, 1fr)"
            gridAutoFlow="row"
            gridTemplateAreas={`
          "Description-Icon . ."
          ". . ."
          "Description-Animate-Item Description-Item ."
          `}
            gap={2}
            alignItems="stretch"
            gridArea="Description"
          >
            <Box gridArea="Description-Icon">
              <Item>Description Icon</Item>
            </Box>
            <Box gridArea="Description-Animate-Item">
              <Item>Description Animate Item</Item>
            </Box>
            <Box gridArea="Description-Item">
              <Item>Description Item</Item>
            </Box>
          </Box>

          <Box
            container
            display="grid"
            gridTemplateColumns="repeat(3, 1fr)"
            gridTemplateRows="repeat(3, 1fr)"
            gridAutoFlow="row"
            gridTemplateAreas={`
          "Titles-Item Titles-Item Titles-Item"
          ". . ."
          ". Titles-Btn Titles-Btn"
          `}
            gap={2}
            alignItems="stretch"
            gridArea="Titles"
          >
            <Box gridArea="Titles-Item">
              <Item>Titles Item</Item>
            </Box>
            <Box gridArea="Titles-Btn">
              <Item>Titles Btn</Item>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
}

const App = () => {
  return (
    <>
      <BasicGrid />

      <NasaParticle />
    </>
  );
};

export default App;
