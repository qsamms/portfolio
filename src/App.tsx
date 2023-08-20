import { makeStyles } from "@mui/styles";
import ParticleBackground from "./ParticleBackground";
import NavBar from "./NavBar";
import MainText from "./MainText";
import QLogo from "./QLogo";

const useStyles = makeStyles({
  App: {
    position: "relative",
    height: "100vh",
    width: "100vw",
    backgroundColor: "#d3d3d3",
  },
  welcomeMessage: {
    position: "absolute",
    zIndex: 1,
    border: "1px solid black",
    justifyContent: "space-between",
  },
  qLogo: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-20%, -50%)",
  },
});

export default function App(): JSX.Element {
  const classes = useStyles();

  return (
    <div className={classes.App}>
      <NavBar />
      <div className={classes.qLogo}>
        <QLogo big={true} width={800} height={800} />
      </div>
      <div className={classes.welcomeMessage}>
        <MainText />
      </div>
    </div>
  );
}
