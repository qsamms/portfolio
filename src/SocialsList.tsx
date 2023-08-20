import { makeStyles } from "@mui/styles";
import github from "./images/github.png";
import linkedin from "./images/linkedin.png";

const useStyles = makeStyles({
  socials: {
    position: "absolute",
    top: "35vh",
    left: "1vw",
  },
  listItem: {
    listStyle: "none",
    opacity: 0.7,

    "&:hover": {
      opacity: 1,
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
            <img src={github} alt="github" width="80" height="80"></img>
          </a>
        </li>
        <li className={classes.listItem}>
          <a href="https://linkedin.com/in/quinnsamms" target="_blank">
            <img src={linkedin} alt="linkedin" width="80" height="80"></img>
          </a>
        </li>
      </ul>
    </div>
  );
}
