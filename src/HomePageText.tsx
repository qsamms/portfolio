import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  main: {
    position: "relative",
    fontFamily: "Verdana",
    display: "block",
    justifyContent: "center",
    alignItems: "center",
    // border: "1px solid black",
    height: "100%",
  },
  content: {
    position: "relative",
  },
  myTitle: {
    fontSize: "75px",
    letterSpacing: "3px",
    paddingBottom: "30px",

    "@media (max-width: 1000px)": {
      fontSize: "50px",
      letterSpacing: "2px",
    },
  },
  desc: {
    paddingLeft: "5px",
    letterSpacing: "1px",
    fontSize: "30px",

    "@media (max-width: 1000px)": {
      fontSize: "20px",
    },
  },
  buttonContainer: {
    position: "relative",
    paddingTop: "25px",
    right: "5px",

    "@media (max-width: 700px)": {
      display: "none",
    },
  },

  button: {
    position: "relative",
    left: "10px",
    top: "10px",
    display: "inline-block",
    outline: 0,
    border: 0,
    cursor: "pointer",
    borderRadius: "8px",
    padding: "14px 24px 16px",
    fontSize: "18px",
    fontFamily: "Verdana",
    fontWeight: 700,
    lineHeight: 1,
    transition: "transform 200ms, background 200ms",
    background: "transparent",
    color: "#000000",
    boxShadow: "0 0 0 3px #000000 inset",

    "&:hover": {
      transform: "translateY(-5px)",
    },
  },
});

export default function MainText({
  isDetailsOpen,
  toggleDetailView,
}: {
  isDetailsOpen: boolean;
  toggleDetailView: () => void;
}): JSX.Element {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <div className={classes.content}>
        <div className={classes.myTitle}>Quinn Samms </div>
        <div className={classes.desc}>Full Stack Engineer</div>
        <div className={classes.buttonContainer}>
          <button type="button" className={classes.button} onClick={toggleDetailView}>
            About Me
          </button>
        </div>
      </div>
    </div>
  );
}
