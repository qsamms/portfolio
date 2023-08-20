import { useState } from "react";
import { makeStyles } from "@mui/styles";
import ParticleBackground from "./ParticleBackground";
import NavBar from "./NavBar";
import MainText from "./MainText";
import AboutMe from "./AboutMeSection";
import QLogo from "./QLogo";
import JumpingArrowDown from "./JumpingArrowDown";
import SocialsList from "./SocialsList";

const useStyles = makeStyles({
  App: {
    position: "relative",
    height: "100vh",
    width: "100vw",
    backgroundColor: "#d3d3d3",
  },
  welcomeMessage: {
    position: "absolute",
    display: "flex",
    top: "50%",
    left: "50%",
    transform: "translate(-40%, -50%)",
    zIndex: 1,
    justifyContent: "space-between",
  },
  welcomeText: {
    position: "relative",
    minWidth: "500px",
  },
  qLogo: {
    position: "absolute",
    paddingLeft: "10px",
    top: "50%",
    left: "50%",
    transform: "translate(-20%, -50%)",
  },
  detailsContainer: {
    minWidth: "750px",
    minHeight: "750px",
    paddingLeft: "30px",
  },
});

export default function App(): JSX.Element {
  const classes = useStyles();
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const toggleDetailView = () => setIsDetailsOpen(!isDetailsOpen);

  return (
    <div className={classes.App}>
      <NavBar />
      <SocialsList />
      <div className={classes.welcomeMessage}>
        <div className={classes.welcomeText}>
          <MainText isDetailsOpen={isDetailsOpen} toggleDetailView={toggleDetailView} />
        </div>
        <div className={classes.detailsContainer}>
          <AboutMe isDetailsOpen={isDetailsOpen} toggleDetailsOpen={toggleDetailView} />
          <div className={classes.qLogo}>
            <QLogo isDetailsOpen={isDetailsOpen} big={true} width={700} height={700} />
          </div>
        </div>
        <JumpingArrowDown />
      </div>
    </div>
  );
}
