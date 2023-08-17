import { makeStyles } from "@mui/styles";
import ParticleBackground from "./ParticleBackground";
import Particles from "react-particles";

const useStyles = makeStyles({
  App: {
    textAlign: "center",
  },
});

export default function App(): JSX.Element {
  const classes = useStyles();

  return <ParticleBackground />;
}
