import { makeStyles } from "@mui/styles";
import Stack from "@mui/material/Stack/Stack";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";

const useStyles = makeStyles({
  main: {
    position: "absolute",
    top: "0px", 
    display: "block",
    backgroundColor: "black",
    borderRadius: "10px",
    width: "60%",
    fontFamiy: "Verdana",
    zIndex: 99,
    boxShadow: "5px 10px 8px #888888",
    opacity: "0.9",
    overflowY: "scroll",
    overflowX: "hidden",
    transition: "height 1s ease",
    scrollbarWidth: "none", //hide on firefox
    msOverflowStyle: "none", //hide on IE, Edge
    "&::-webkit-scrollbar": {
      //hide on chrome
      display: "none",
    },
  },
  open: {
    height: "100%",
  },
  closed: {
    height: "0%",
  },
  textContainer: {
    width: "85%",
    position: "relative",
    left: "30px",
  },
  "@keyframes unroll": {
    "0%": {
      height: 0,
    },
    "100%": {
      height: "100%",
    },
  },
  header: {
    fontSize: "30px",
    paddingBottom: "10px",
    marginBottom: "20px", 
    letterSpacing: "2px",
    color: "white",
    fontFamiy: "Verdana",
    borderBottom: "1px solid white"
  },
  text: {
    color: "white",
    fontFamiy: "Verdana",
  },
  closeIcon: {
    position: "relative",
    top: "10px",
    left: "90%",

    "@media (min-width: 2000px)": {
      left: "93%",
    },

    "@media (max-width: 1000px)": {
      left: "85%",
    },
  },
});

export default function AboutMe({
  isDetailsOpen,
  toggleDetailsOpen,
}: {
  isDetailsOpen: boolean;
  toggleDetailsOpen: () => void;
}): JSX.Element {
  const classes = useStyles();

  return (
    <div className={`${classes.main} ${isDetailsOpen ? classes.open : classes.closed}`}>
      <div className={classes.closeIcon}>
        <IconButton onClick={toggleDetailsOpen}>
          <CloseIcon style={{ color: "white" }} />
        </IconButton>
      </div>
      <div className={classes.textContainer}>
        <div className={classes.header}>About Me</div>
        <Stack spacing={3}>
          <div className={classes.text}>
            Hi! I'm Quinn, a 21-year-old Computer Science & Engineering student at Santa Clara
            University.
          </div>
          <div className={classes.text}>
            I'm a motivated, focused, and high-energy person with a passion for learning.
          </div>
          <div className={classes.text}>
            I love to build projects (like this site) to build skills in my spare time.{" "}
          </div>
          <div className={classes.text}>
            When I'm not coding, I like to play video games, exercise, and find fun problems to
            solve. Check out some of my work below!{" "}
          </div>
          <div className={classes.text}>
            Feel free to reach out via the contact form. I'd love to meet you!
          </div>
        </Stack>
      </div>
    </div>
  );
}
