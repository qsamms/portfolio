import { useRef } from "react";
import { makeStyles } from "@mui/styles";
import emailjs from "@emailjs/browser";

const useStyles = makeStyles({
  wrapper: {
    display: "flex",
    position: "absolute",
    width: "100%",
    top: "calc(100vh + 320px + 1050px)",
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
    paddingBottom: "20px",
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
});

export default function MyTechnologies({ forwardedRef }): JSX.Element {
  const classes = useStyles();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_z8ywe08", "template_75fw3id", form.current, "WQO8F9BmHEXzHclfN").then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
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
            className={classes.input}
            type="text"
            name="user_name"
            placeholder="Your Name..."
            required
          />
          <label className={classes.labels}>Email *</label>
          <input
            className={classes.input}
            type="email"
            name="user_email"
            placeholder="username@example.com"
            required
          />
          <label className={classes.labels}>Message *</label>
          <textarea className={classes.textArea} name="message" placeholder="Say Hello!" required />
          <input className={classes.sendButton} type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
}
