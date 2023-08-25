import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  main: {
    position: "relative",
    top: "50vh",
    height: "300px",
    width: "100%",
    background: "black",
  },
});

export default function MyTechnologies({ forwardedRef }): JSX.Element {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.main} ref={forwardedRef}></div>
    </div>
  );
}
