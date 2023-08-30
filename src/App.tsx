import { useState, useRef } from "react";
import { makeStyles } from "@mui/styles";
import NavBar from "./NavBar";
import MainText from "./HomePageText";
import AboutMe from "./AboutMe";
import QLogo from "./QLogo";
import JumpingArrowDown from "./JumpingArrowDown";
import SocialsList from "./SocialsList";
import MyTechnologies from "./MyTechnologies";
import Projects from "./Projects";
import Contact from "./Contact";

const useStyles = makeStyles({
  App: {
    position: "relative",
    height: "100vh",
    width: "100vw",
    backgroundColor: "#d3d3d3",
    overflowX: "hidden",
    display: "flex",
    flexDirection: "column",
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
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const toggleDetailView = () => setIsDetailsOpen(!isDetailsOpen);

  const scrollTechnologiesIntoView = () => {
    if (techRef.current) {
      techRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  const scrollProjectsIntoView = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  const scrollContactIntoView = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  const aboutMeClicked = () => {
    setIsDetailsOpen(!isDetailsOpen);
  };

  return (
    <div className={classes.App}>
      <NavBar
        aboutMeClicked={aboutMeClicked}
        projectsClicked={scrollProjectsIntoView}
        contactClicked={scrollContactIntoView}
      />
      <SocialsList />
      <div ref={aboutmeRef} className={classes.homePage}>
        <div className={classes.welcomeText}>
          <MainText isDetailsOpen={isDetailsOpen} toggleDetailView={toggleDetailView} />
        </div>
        <div className={classes.detailsContainer}>
          <AboutMe isDetailsOpen={isDetailsOpen} toggleDetailsOpen={toggleDetailView} />
          <QLogo big={true} />
        </div>
      </div>
      <JumpingArrowDown scrollToElement={scrollTechnologiesIntoView} />

      <MyTechnologies forwardedRef={techRef} />
      <Projects forwardedRef={projectsRef} />
      <Contact forwardedRef={contactRef} />
    </div>
  );
}
