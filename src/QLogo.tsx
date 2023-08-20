import { makeStyles } from "@mui/styles";
import logo from "./images/qlogo.png";
import biggerlogo from "./images/BiggerQLogo.png";

const useStyles = makeStyles({
  image: {
    color: "#ADD8E6",
  },
});

export default function QLogo({
  isDetailsOpen,
  big,
  width,
  height,
}: {
  isDetailsOpen: boolean;
  big: boolean;
  width: number;
  height: number;
}): JSX.Element {
  const classes = useStyles();
  if (big)
    return (
      <img
        className={classes.image}
        src={biggerlogo}
        alt="Qlogobig"
        width={width}
        height={height}
      />
    );
  else return <img src={logo} alt="Qlogo" width={width} height={height} />;
}
