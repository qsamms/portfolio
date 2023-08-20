import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  welcome: {
    position: "relative",
    fontSize: "75px",
    fontFamily: "Lato",
    display: "flex",
    margin: "auto",
    letterSpacing: "5px",
    justifyContet: "center",
    alignItems: "center",
  },
});

export default function MainText(): JSX.Element {
  const classes = useStyles();

  return <div className={classes.welcome}>Quinn Samms</div>;
}
