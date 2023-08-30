import { useRef, useState } from "react";
import { makeStyles } from "@mui/styles";
import python from "./images/python.png";
import cpp from "./images/cpp.png";
import java from "./images/java.png";
import django from "./images/django.png";
import postgres from "./images/postgresql.png";
import mysql from "./images/mysql.png";
import react from "./images/react.png";

const useStyles = makeStyles({
  main: {
    width: "100%",
    height: "270px",
    position: "absolute",
    top: "calc(100vh + 50px)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  rowContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
    backgroundColor: "black",
  },
  scrollableList: {
    paddingTop: "20px",
    display: "flex",
    maxWidth: "40%",
    overflowX: "auto",
    cursor: "grab",
    userSelect: "none",
    whiteSpace: "nowrap",
    scrollbarWidth: "none", //hide on firefox
    msOverflowStyle: "none", //hide on IE, Edge

    "&:active": {
      cursor: "grabbing",
    },

    "&::-webkit-scrollbar": {
      //hide on chrome
      display: "none",
    },
  },
  title: {
    position: "relative",
    fontFamily: "Verdana",
    fontSize: "40px",
    letterSpacing: "1px",
    margin: "auto",
    paddingBottom: "30px",
    display: "flex",
  },
  icon: {
    padding: "0px 30px",
    width: "100px",
    height: "100px",
  },
  reactIcon: {
    padding: "0px 30px",
    width: "120px",
    height: "100px",
  },
  scrollIcon: {
    paddingTop: "30px",
  },
});

export default function MyTechnologies({ forwardedRef }): JSX.Element {
  const classes = useStyles();
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();

    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  return (
    <div>
      <div className={classes.main} ref={forwardedRef}>
        <div className={classes.title}>
          <div>My Technologies</div>
        </div>
        <div className={classes.rowContent}>
          <div
            className={classes.scrollableList}
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
          >
            <img className={classes.icon} src={python}></img>
            <img className={classes.icon} src={cpp}></img>
            <img className={classes.icon} src={java}></img>
            <img className={classes.icon} src={django}></img>
            <img className={classes.reactIcon} src={react}></img>
            <img className={classes.icon} src={postgres}></img>
            <img className={classes.icon} src={mysql}></img>
          </div>
        </div>
      </div>
    </div>
  );
}
