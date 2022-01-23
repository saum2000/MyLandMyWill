import React from "react";
import Dialog from "@material-ui/core/Dialog";
<<<<<<< HEAD
import Frm from "./reglform";
=======
import Frm from "./frm";
>>>>>>> 1d3b6e53ebfe4dbe98256e52631398e02cb23c68
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
