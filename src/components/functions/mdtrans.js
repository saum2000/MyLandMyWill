import React from "react";
import Dialog from "@material-ui/core/Dialog";
import Form1 from "./trans-form";
const Mdtrans = ({ open, handleClose }) => {
  return (
    // props received from App.js
    <Dialog open={open} onClose={handleClose}>
      {" "}
      {/* form to be created */} <Form1 handleClose={handleClose} />{" "}
    </Dialog>
  );
};

export default Mdtrans;
