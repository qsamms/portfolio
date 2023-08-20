import { makeStyles } from "@mui/styles";
import "./css/jumpingarrow.css";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import IconButton from "@mui/material/IconButton/IconButton";

const useStyles = makeStyles({});

export default function JumpingArrowDown({}: {}): JSX.Element {
  const classes = useStyles();

  return (
    <div className="down-arrow">
      <IconButton>
        <ArrowDownwardIcon fontSize="large" />
      </IconButton>
    </div>
  );
}
