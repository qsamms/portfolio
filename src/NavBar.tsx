import { makeStyles } from "@mui/styles";
import { Button } from "@mui/material";
import QLogo from "./QLogo";
// import clsx from "clsx";

const useStyles = makeStyles({
  navBar: {
    zIndex: 1,
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background: "#d3d3d3",
    padding: "10px 80px",
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
});

export default function NavBar(): JSX.Element {
  const classes = useStyles();

  return (
    <div className={classes.navBar}>
      <nav>
        <QLogo big={false} width={100} height={100} />
      </nav>

      <ul className={classes.navBarItems}>
        <li className={classes.navBarItem}>About Me</li>
        <li className={classes.navBarItem}>Projects</li>
        <li className={classes.navBarItem}>Contact</li>
      </ul>
    </div>
  );
}
