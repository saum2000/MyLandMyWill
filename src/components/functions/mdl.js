import React from "react";
import Dialog from "@material-ui/core/Dialog";
import Frm from "./frm";
const Mdl = ({ open, handleClose }) => {
  return (
    // props received from App.js
    <Dialog open={open} onClose={handleClose}>
      {" "}
      {/* form to be created */} <Frm handleClose={handleClose} />{" "}
    </Dialog>
  );
};

export default Mdl;
