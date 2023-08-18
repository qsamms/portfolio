import { makeStyles } from "@mui/styles";
import ParticleBackground from "./ParticleBackground";
import NavBar from "./NavBar";

const useStyles = makeStyles({
  App: {
    position: "relative",
    overflow: "hidden",
  },
});

export default function App(): JSX.Element {
  const classes = useStyles();

  return (
    <div className={classes.App}>
      <ParticleBackground />
      <NavBar />
      {/* <MainText /> */}
    </div>
  );
}
