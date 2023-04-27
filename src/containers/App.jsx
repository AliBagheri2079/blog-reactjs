import NasaParticle from "@/components/Particles/NasaParticle";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="/ali">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const App = () => {
  return (
    <>
      <Container maxWidth="sm">
        <div className="my-4">
          <Typography variant="h4" component="h1" gutterBottom>
            Material UI Create React App example with Tailwind CSS in TypeScript
          </Typography>
          <Slider
            className="my-4"
            defaultValue={30}
            classes={{ active: "shadow-none" }}
            slotProps={{ thumb: { className: "hover:shadow-none" } }}
          />
          <Copyright />
        </div>
      </Container>

      <NasaParticle />
    </>
  );
};

export default App;
