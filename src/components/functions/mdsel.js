import React from "react";
import Dialog from "@material-ui/core/Dialog";
import Formsel from "./updsform";
const Mdsel = ({ open, handleClose }) => {
  return (
    // props received from App.js
    <Dialog open={open} onClose={handleClose}>
      {" "}
      {/* form to be created */} <Formsel handleClose={handleClose} />{" "}
    </Dialog>
  );
};

export default Mdsel;
