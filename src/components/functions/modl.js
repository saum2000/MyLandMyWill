import React from "react";
import Dialog from "@material-ui/core/Dialog";
import Formland from "./reqlform";
const Modl = ({ open, handleClose }) => {
  return (
    // props received from App.js
    <Dialog open={open} onClose={handleClose}>
      {" "}
      {/* form to be created */} <Formland handleClose={handleClose} />{" "}
    </Dialog>
  );
};

export default Modl;
