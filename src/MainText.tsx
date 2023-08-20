import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  main: {
    position: "relative",
    fontFamily: "Lato",
    display: "block",
    justifyContet: "center",
    alignItems: "center",
    // border: "1px solid black",
    height: "100%",
  },
  content: {
    position: "relative",
    top: "150px",
  },
  myTitle: {
    fontSize: "75px",
    letterSpacing: "5px",
    paddingBottom: "30px",
  },
  desc: {
    paddingLeft: "5px",
    letterSpacing: "1px",
    fontSize: "30px",
  },
  buttonContainer: {
    position: "relative",
    paddingTop: "25px",
    right: "5px",
  },

  button: {
    backgroundImage: "linear-gradient(to right, #000000 0%, #e74c3c  51%, #000000  100%)",
    margin: "10px",
    padding: "15px 45px",
    textAlign: "center",
    transition: "0.5s",
    backgroundSize: "200% auto",
    color: "white",
    boxShadow: "5px 10px 8px #888888",
    borderRadius: "10px",
    display: "block",
    fontSize: "20px",
    fontFamily: "Lato",
    letterSpacing: "1px",
    minWidth: "185px",

    "&:hover": {
      backgroundPosition: "right center" /* change the direction of the change here */,
      color: "#fff",
      textDecoration: "none",
      cursor: "pointer",
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
            {isDetailsOpen ? "Close" : "About me"}
          </button>
        </div>
      </div>
    </div>
  );
}
