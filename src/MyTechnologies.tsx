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
    overflowX: "scroll",
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

  return (
    <div>
      <div className={classes.main} ref={forwardedRef}>
        <div className={classes.title}>
          <div>My Technologies</div>
        </div>
        <div className={classes.rowContent}>
          <div className={classes.scrollableList}>
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
