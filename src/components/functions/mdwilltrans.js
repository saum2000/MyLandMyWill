import React from "react";
import Dialog from "@material-ui/core/Dialog";
import Willtrnsform from "./delform";
const Mdwt = ({ open, handleClose }) => {
  return (
    // props received from App.js
    <Dialog open={open} onClose={handleClose}>
      {" "}
      {/* form to be created */} <Willtrnsform handleClose={handleClose} />{" "}
    </Dialog>
  );
};

export default Mdwt;