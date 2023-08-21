import { useState, useRef } from "react";
import { makeStyles } from "@mui/styles";
import ParticleBackground from "./ParticleBackground";
import NavBar from "./NavBar";
import MainText from "./MainText";
import AboutMe from "./AboutMeSection";
import QLogo from "./QLogo";
import JumpingArrowDown from "./JumpingArrowDown";
import SocialsList from "./SocialsList";
import MyTechnologies from "./MyTechnologies";

const useStyles = makeStyles({
  App: {
    position: "relative",
    height: "100vh",
    width: "100vw",
    backgroundColor: "#d3d3d3",
    overflowX: "hidden",
  },
  homePage: {
    width: "60vw",
    height: "60vh",
    position: "relative",
    display: "flex",
    top: "30%",
    left: "55%",
    transform: "translate(-50%, -50%)",
    zIndex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  welcomeText: {
    margin: "auto",
    minWidth: "570px",

    "@media (max-width: 1000px)": {
      minWidth: "320px",
    },
    // border: "1px solid black",
  },
  qLogo: {
    position: "relative",
    top: "100px",
    margin: "auto",
    border: "1px solid black",
  },
  detailsContainer: {
    display: "flex",
    minWidth: "60%",
    minHeight: "100%",
    paddingLeft: "20px",
    // border: "1px solid black",
    alignItems: "center",
    justifyContent: "center",

    "@media (max-width: 500px)": {
      display: "none",
    },
  },
});

export default function App(): JSX.Element {
  const classes = useStyles();
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const techRef = useRef(null);
  const aboutmeRef = useRef(null);

  const toggleDetailView = () => setIsDetailsOpen(!isDetailsOpen);

  const scrollTechnologiesIntoView = () => {
    if (techRef.current) {
      techRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  const aboutMeClicked = () => {
    setIsDetailsOpen(!isDetailsOpen);
  };

  return (
    <div className={classes.App}>
      <NavBar aboutMeClicked={aboutMeClicked} />
      <SocialsList />
      <div ref={aboutmeRef} className={classes.homePage}>
        <div className={classes.welcomeText}>
          <MainText isDetailsOpen={isDetailsOpen} toggleDetailView={toggleDetailView} />
        </div>
        <div className={classes.detailsContainer}>
          <AboutMe isDetailsOpen={isDetailsOpen} toggleDetailsOpen={toggleDetailView} />
          <QLogo big={true} />
        </div>
        <JumpingArrowDown scrollToElement={scrollTechnologiesIntoView} />
      </div>
      <div ref={techRef}>
        <MyTechnologies />
      </div>
    </div>
  );
}
