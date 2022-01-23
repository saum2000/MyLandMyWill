import React from "react";
import Dialog from "@material-ui/core/Dialog";
import Form2 from "./verilandform";
const Mdveri = ({ open, handleClose }) => {
  return (
    // props received from App.js
    <Dialog open={open} onClose={handleClose}>
      {" "}
      {/* form to be created */} <Form2 handleClose={handleClose} />{" "}
    </Dialog>
  );
};

export default Mdveri;
