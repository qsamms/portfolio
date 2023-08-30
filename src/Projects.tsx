import { useState, useRef, MutableRefObject } from "react";
import { makeStyles } from "@mui/styles";
import laptop from "./images/laptop.png";
import python from "./images/python.png";
import cpp from "./images/cpp.png";
import java from "./images/java.png";
import django from "./images/django.png";
import postgres from "./images/postgresql.png";
import mysql from "./images/mysql.png";
import react from "./images/react.png";
import javascript from "./images/javascript.png";
import sqllite from "./images/sqllite.png";
import typing from "./images/typing.png";

const useStyles = makeStyles({
  main: {
    position: "absolute",
    top: "calc(100vh + 320px)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginTop: "150px",
  },
  header: {
    fontFamily: "Verdana",
    fontSize: "40px",
    letterSpacing: "1px",
    margin: "auto",
    paddingBottom: "70px",
    display: "flex",
  },
  projectRow: {
    display: "flex",
  },
  project: {
    maxWidth: "600px",
    padding: "0px 40px",
    margin: "0px 10px",
    // border: "1px solid black",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  projectHeader: {
    fontSize: "20px",
    fontFamily: "Verdana",
    paddingBottom: "20px",
  },
  projectDescription: {
    fontSize: "15px",
    fontFamily: "Verdana",
    paddingBottom: "30px",
    lineHeight: 1.6,
  },
  technologyList: { display: "flex" },
  icon: {
    padding: "0px 15px",
    width: "60px",
    height: "60px",
  },
  laptop: {
    width: "500px",
    height: "300px",
    padding: "20px 0px",
  },
  video: {
    position: "absolute",
    top: "150px",
    width: "380px",
    height: "250px",
    border: "2px solid black",
  },
  typing: {
    position: "absolute",
    top: "160px",
  },
});

export default function App({ forwardedRef }): JSX.Element {
  const classes = useStyles();

  return (
    <div className={classes.main} ref={forwardedRef}>
      <div className={classes.header}>Projects</div>
      <div className={classes.projectRow}>
        <div className={classes.project}>
          <img className={classes.laptop} src={laptop} alt="laptop"></img>
          <div className={classes.typing}>
            <a href="http://54.219.164.0:8000/home/" target="_blank">
              <img src={typing} alt="typing site" width="385" height="245" />
            </a>
          </div>
          <div className={classes.projectHeader}>Typing Site</div>
          <div className={classes.projectDescription}>
            My own take on popular typing websites like TypeRacer and Monkeytype that I've always
            loved to use since I was young. Built with a Django BE and a vanilla Javascript, HTML,
            CSS FE. The Site features user authentication and login, and a profile page where users
            can view their previous typing statistics. Deployed to an AWS EC2 instance and available
            for use on the public internet.{" "}
          </div>
          <div className={classes.technologyList}>
            <img className={classes.icon} src={python}></img>
            <img className={classes.icon} src={django}></img>
            <img className={classes.icon} src={javascript}></img>
            <img className={classes.icon} src={sqllite}></img>
          </div>
        </div>
        <div className={classes.project}>
          <img className={classes.laptop} src={laptop} alt="laptop"></img>
          <iframe
            className={classes.video}
            src="https://youtube.com/embed/RtDuveZ8F6M"
            allowFullScreen
            title="myvideo"
          />
          <div className={classes.projectHeader}>Spelling Bee Game</div>
          <div className={classes.projectDescription}>
            A spelling bee game that takes inspiration from the New York Times spelling bee puzzles.
            Players generate as many words as possible from a given set of letters in under a
            minute. Written completely in Java. Usernames, scores, and associated words for a game
            are stored in a MySQL database and can be viewed in the all time leaderboard{" "}
          </div>
          <div className={classes.technologyList}>
            <img className={classes.icon} src={java}></img>
            <img className={classes.icon} src={mysql}></img>
          </div>
        </div>
      </div>
    </div>
  );
}
