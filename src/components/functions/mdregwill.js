import React from "react";
import Dialog from "@material-ui/core/Dialog";
import Willform from "./regwillform";
const Mdwill = ({ open, handleClose }) => {
  return (
    // props received from App.js
    <Dialog open={open} onClose={handleClose}>
      {" "}
      {/* form to be created */} <Willform handleClose={handleClose} />{" "}
    </Dialog>
  );
};

export default Mdwill;
