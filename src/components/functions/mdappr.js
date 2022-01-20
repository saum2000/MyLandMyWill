import React from "react";
import Dialog from "@material-ui/core/Dialog";
import Formappr from "./appform";
const Mdap = ({ open, handleClose }) => {
  return (
    // props received from App.js
    <Dialog open={open} onClose={handleClose}>
      {" "}
      {/* form to be created */} <Formappr handleClose={handleClose} />{" "}
    </Dialog>
  );
};

export default Mdap;
