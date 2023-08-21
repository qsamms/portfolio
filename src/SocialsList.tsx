import { makeStyles } from "@mui/styles";
import github from "./images/github.png";
import linkedin from "./images/linkedin.png";

const useStyles = makeStyles({
  socials: {
    position: "absolute",
    top: "35vh",

    "@media (max-width: 1150px)": {
      display: "none",
    },
  },
  listItem: {
    listStyle: "none",
    opacity: 0.7,

    "&:hover": {
      opacity: 1,
    },
  },
  icon: {
    width: "80px",
    height: "80px",

    "@media (max-width: 1250px)": {
      width: "60px",
      height: "60px",
    },
  },
});

export default function SocialsList({}: {}): JSX.Element {
  const classes = useStyles();

  return (
    <div className={classes.socials}>
      <ul>
        <li className={classes.listItem}>
          <a href="https://github.com/qsamms" target="_blank">
            <img className={classes.icon} src={github} alt="github" width="80" height="80"></img>
          </a>
        </li>
        <li className={classes.listItem}>
          <a href="https://linkedin.com/in/quinnsamms" target="_blank">
            <img
              className={classes.icon}
              src={linkedin}
              alt="linkedin"
              width="80"
              height="80"
            ></img>
          </a>
        </li>
      </ul>
    </div>
  );
}
