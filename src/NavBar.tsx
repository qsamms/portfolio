import { makeStyles } from "@mui/styles";
import { Button } from "@mui/material";
// import clsx from "clsx";

const useStyles = makeStyles({
  navBar: {
    zIndex: 1,
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background: "#5A5A5A",
    padding: "10px 80px",
    boxShadow: "0 5px 15px black",
    borderBottom: "1px solid #4d4d4d",
  },
  navBarItems: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  navBarItem: {
    padding: "0 20px",
    listStyle: "none",
  },
  navBarLink: {
    "&:hover": {
      opacity: 1,
    },

    "&:before": {
      transition: "300ms",
      height: "5px",
      content: "",
      position: "absolute",
      backgroundColor: "#5A5A5A",
      width: "0%",
      bottom: "10px",
    },
  },
});

export default function NavBar(): JSX.Element {
  const classes = useStyles();

  return (
    <div className={classes.navBar}>
      <nav>
        <Button>Quinn Samms</Button>
      </nav>

      <ul className={classes.navBarItems}>
        <li className={classes.navBarItem}>
          <Button>About Me</Button>
        </li>
        <li className={classes.navBarItem}>
          <Button>Projects</Button>
        </li>
        <li className={classes.navBarItem}>
          <Button>Contact</Button>
        </li>
      </ul>
    </div>
  );
}
