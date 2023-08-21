import { makeStyles } from "@mui/styles";
import QLogo from "./QLogo";
import Stack from "@mui/material/Stack/Stack";
import Transition from "react-transition-group/Transition";
import CloseIcon from "@mui/icons-material/Close";
import { Icon, IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";

const useStyles = makeStyles({
  main: {
    position: "absolute",
    top: "20px",
    display: "block",
    backgroundColor: "black",
    borderRadius: "10px",
    height: "100%",
    width: "60%",
    fontFamiy: "Lato",
    zIndex: 99,
    boxShadow: "5px 10px 8px #888888",
    opacity: "0.9",
    overflow: "scroll", 
  },
  textContainer: {
    width: "85%",
    position: "relative",
    top: "10px",
    left: "30px",
  },
  header: {
    fontSize: "30px",
    paddingBottom: "20px",
    letterSpacing: "2px",
    color: "white",
    fontFamiy: "Lato",
  },
  text: {
    color: "white",
    fontFamiy: "Lato",
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

  if (isDetailsOpen)
    return (
      <div className={classes.main}>
        <div className={classes.closeIcon}>
          <IconButton onClick={toggleDetailsOpen}>
            <CloseIcon style={{ color: "white" }} />
          </IconButton>
        </div>
        <div className={classes.textContainer}>
          <Stack spacing={2}>
            <div className={classes.header}>About Me</div>
            <div className={classes.text}>
              Hi! I'm Quinn, a 20-year-old Computer Science & Engineering student at Santa Clara
              University.
            </div>
            <div className={classes.text}>I like doing this this or that</div>
            <div className={classes.text}>When i'm not doing this or that, I'm doing this... </div>
          </Stack>
        </div>
      </div>
    );
}
