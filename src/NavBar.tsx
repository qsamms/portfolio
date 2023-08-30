import { makeStyles } from "@mui/styles";
import { Button } from "@mui/material";
import QLogo from "./QLogo";
import IconButton from "@mui/material/IconButton/IconButton";
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

export default function NavBar({
  aboutMeClicked,
  projectsClicked,
  contactClicked,
}: {
  aboutMeClicked: () => void;
  projectsClicked: () => void;
  contactClicked: () => void;
}): JSX.Element {
  const classes = useStyles();

  return (
    <div className={classes.navBar}>
      <nav>
        <QLogo big={false} />
      </nav>

      <ul className={classes.navBarItems}>
        <li className={classes.navBarItem}>
          <Button onClick={aboutMeClicked} style={{ color: "black", fontFamily: "Verdana" }}>
            About Me
          </Button>
        </li>
        <li className={classes.navBarItem}>
          <Button onClick={projectsClicked} style={{ color: "black", fontFamily: "Verdana" }}>
            Projects
          </Button>
        </li>
        <li className={classes.navBarItem}>
          <Button onClick={contactClicked} style={{ color: "black", fontFamily: "Verdana" }}>
            Contact
          </Button>
        </li>
      </ul>
    </div>
  );
}
