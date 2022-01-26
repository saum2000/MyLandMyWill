import React from "react";
import Dialog from "@material-ui/core/Dialog";
import Delform from "./delform";
const Mddel = ({ open, handleClose }) => {
  return (
    // props received from App.js
    <Dialog open={open} onClose={handleClose}>
      {" "}
      {/* form to be created */} <Delform handleClose={handleClose} />{" "}
    </Dialog>
  );
};

export default Mddel;
