import React from "react";
import Dialog from "@material-ui/core/Dialog";
import Formss from "./regsform";
const Md = ({ open, handleClose }) => {
  return (
    // props received from App.js
    <Dialog open={open} onClose={handleClose}>
      {" "}
      {/* form to be created */} <Formss handleClose={handleClose} />{" "}
    </Dialog>
  );
};

export default Md;
