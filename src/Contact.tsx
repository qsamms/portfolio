import { useRef, useState } from "react";
import { makeStyles } from "@mui/styles";
import emailjs from "@emailjs/browser";
import { CircularProgress } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import ErrorIcon from "@mui/icons-material/Error";

const useStyles = makeStyles({
  wrapper: {
    display: "flex",
    position: "absolute",
    width: "100%",
    top: "calc(100vh + 320px + 1600px)",
  },
  main: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
    height: "600px",
    width: "100%",
    background: "black",
  },
  header: {
    color: "white",
    fontFamily: "Verdana",
    fontSize: "30px",
    letterSpacing: "1px",
    paddingTop: "50px",
    paddingBottom: "10px",
    borderBottom: "1px solid white",
    marginBottom: "10px",
  },
  labels: {
    color: "white",
    paddingTop: "20px",
    paddingBottom: "10px",
    fontFamily: "Verdana",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    minWidth: "500px",
  },
  sendButton: {
    float: "left",
    width: "130px",
    marginTop: "40px",
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
    color: "white",
    boxShadow: "0 0 0 3px white inset",

    "&:hover": {
      transform: "translateY(-3px)",
    },
  },
  input: {
    padding: "10px 10px",
    backgroundColor: "#d3d3d3",
    fontFamily: "Verdana",
    fontSize: "17px",
    borderRadius: "10px",
    border: 0,
    padingBottom: "10px",
  },
  textArea: {
    padding: "15px 10px",
    fontFamily: "Verdana",
    fontSize: "15px",
    backgroundColor: "#d3d3d3",
    borderRadius: "10px",
    border: 0,
  },
  statusIcons: {
    position: "relative",
    bottom: "45px",
    left: "150px",
  },
});

export default function MyTechnologies({ forwardedRef }): JSX.Element {
  const classes = useStyles();
  const form = useRef();
  const [isLoadingVisible, setIsLoadingVisible] = useState(false);
  const [isSentVisible, setIsSentVisible] = useState(false);
  const [isErrorVisible, setIsErrorVisible] = useState(false);

  const clearInputs = () => {
    const inputs = document.getElementsByTagName("input");
    const textarea = (document.getElementById("textarea") as HTMLInputElement);

    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = '';
    }
    textarea.value = '';
}

  const sendEmail = (e) => {
    setIsLoadingVisible(true);
    e.preventDefault();

    emailjs.sendForm("service_z8ywe08", "template_75fw3id", form.current, "WQO8F9BmHEXzHclfN").then(
      (result) => {
        console.log(result.text, result.status);
        setIsLoadingVisible(false);
        setIsSentVisible(true);
        clearInputs();
        setTimeout(() => {
          setIsSentVisible(false);
        }, 1000);
      },
      (error) => {
        console.log(error.text, error.status);
        setIsLoadingVisible(false);
        setIsErrorVisible(true);
        setTimeout(() => {
          setIsErrorVisible(false);
        }, 1000);
      }
    );
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.main} ref={forwardedRef}>
        <div className={classes.header}>Contact Me</div>
        <form className={classes.form} ref={form} onSubmit={sendEmail}>
          <label className={classes.labels}>Name *</label>
          <input
            id="input1"
            className={classes.input}
            type="text"
            name="user_name"
            placeholder="Your Name..."
            required
          />
          <label className={classes.labels}>Email *</label>
          <input
            id="input2"
            className={classes.input}
            type="email"
            name="user_email"
            placeholder="username@example.com"
            required
          />
          <label className={classes.labels}>Message *</label>
          <textarea id="textarea" className={classes.textArea} name="message" placeholder="Say Hello!" required />
          <input className={classes.sendButton} type="submit" value="Send" />
          <div className={classes.statusIcons}>
            {isLoadingVisible && <CircularProgress style={{ color: "white" }} />}
            {isSentVisible && <DoneIcon style={{ color: "green" }} fontSize="large" />}
            {isErrorVisible && <ErrorIcon style={{ color: "red" }} fontSize="large" />}
          </div>
        </form>
      </div>
    </div>
  );
}
