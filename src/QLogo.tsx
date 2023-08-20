import { makeStyles } from "@mui/styles";
import logo from "./images/qlogo.png";
import biggerlogo from "./images/BiggerQLogo.png";

const useStyles = makeStyles({
  qLogoBig: {
    height: "100%",
    width: "90%",
    justifyContent: "center",
    alignItems: "center",

    "@media (min-width: 2000px)": {
      width: "80%",
    },
    // border: "1px solid black",
  },
  qLogoSmall: {
    width: "100px",
    height: "100px",
  },
});

export default function QLogo({ big }: { big: boolean }): JSX.Element {
  const classes = useStyles();
  if (big) return <img className={classes.qLogoBig} src={biggerlogo} alt="Qlogobig" />;
  else return <img className={classes.qLogoSmall} src={logo} alt="Qlogo" />;
}
