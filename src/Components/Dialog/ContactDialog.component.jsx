import CloseIcon from "@mui/icons-material/Close";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  InputLabel,
  TextField,
} from "@mui/material";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const public_key = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
const service_id = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const template_id = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;

const ContactDialog = ({ open, handleClose }) => {
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    message: "",
  });
  const onChangeHandler = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
  };

  const templateParams = formdata;

  const onSendEmail = (e) => {
    e.preventDefault();

    emailjs.send(service_id, template_id, templateParams, public_key).then(
      () => {
        alert("mail sent successfully");
      },
      (error) => {
        console.log(error);
      }
    );
    setFormdata({
      name: "",
      email: "",
      message: "",
    });
  };
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      sx={{
        "& .MuiDialog-paper": {
          width: "40%", // Set width of the dialog to 90% of the screen width
          minHeight: "68%",
          // Prevent it from being constrained to a max width
          padding: "0 42px",
          margin: "0", // Prevent it from being constrained to a max width
        },
      }}
    >
      <CloseIcon
        sx={{
          fontSize: "24px",
          position: "absolute",
          top: "5%",
          right: "5%",
          cursor: "pointer",
        }}
        onClick={handleClose}
      />
      <DialogTitle sx={{ marginTop: "10px" }}>Contact me</DialogTitle>
      <DialogContent sx={{ width: "100%" }}>
        <form
          onSubmit={onSendEmail}
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          <InputLabel sx={{ fontSize: "16px" }} htmlFor="name">
            Name
          </InputLabel>
          <TextField
            id="name"
            name="name"
            type="text"
            value={formdata.name}
            onChange={onChangeHandler}
            required
            sx={{
              "& .MuiOutlinedInput-root": {
                fontSize: "16px", // Changes the input text font size
                height: "40px",

                "& fieldset": {
                  borderColor: "#ccc", // Default border color
                },
                "&:hover fieldset": {
                  borderColor: "#25b485", // Border color on hover
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#25b485", // Border color when focused (selected)
                },
              },
            }}
          ></TextField>

          <InputLabel sx={{ fontSize: "16px" }} htmlFor="email">
            Email
          </InputLabel>
          <TextField
            id="email"
            name="email"
            type="email"
            value={formdata.email}
            required
            onChange={onChangeHandler}
            sx={{
              "& .MuiOutlinedInput-root": {
                fontSize: "16px", // Changes the input text font size
                height: "40px",

                "& fieldset": {
                  borderColor: "#ccc", // Default border color
                },
                "&:hover fieldset": {
                  borderColor: "#25b485", // Border color on hover
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#25b485", // Border color when focused (selected)
                },
              },
            }}
          ></TextField>
          <InputLabel sx={{ fontSize: "16px" }} htmlFor="message">
            Message
          </InputLabel>
          <TextField
            id="message"
            name="message"
            type="text"
            value={formdata.message}
            onChange={onChangeHandler}
            multiline
            rows={6}
            required
            sx={{
              "& .MuiOutlinedInput-root": {
                fontSize: "16px", // Changes the input text font size

                "& fieldset": {
                  borderColor: "#ccc", // Default border color
                },
                "&:hover fieldset": {
                  borderColor: "#25b485", // Border color on hover
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#25b485", // Border color when focused (selected)
                },
              },
            }}
          ></TextField>
          <Button
            variant="contained"
            type="submit"
            value="Send"
            sx={{
              backgroundImage:
                "linear-gradient(to right bottom, #7ed56f, #25b485)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              color: "#fff", // Text color
              fontSize: "12px",
              padding: "5px",
              marginTop: "10px",
              height: "45px",
              border: "none", // Optional, remove if shadows are applied by default
              "&:hover": {
                backgroundImage:
                  "linear-gradient(to right bottom, #25b485, #7ed56f)", // Hover effect
              },
            }}
          >
            Submit
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
export default ContactDialog;
