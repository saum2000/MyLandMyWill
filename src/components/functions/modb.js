import React from "react";
import Dialog from "@material-ui/core/Dialog";
<<<<<<< HEAD
import Formss from "./regbform";
=======
import Formss from "./regsform";
>>>>>>> 1d3b6e53ebfe4dbe98256e52631398e02cb23c68
const Mod = ({ open, handleClose }) => {
  return (
    // props received from App.js
    <Dialog open={open} onClose={handleClose}>
      {" "}
      {/* form to be created */} <Formss handleClose={handleClose} />{" "}
    </Dialog>
  );
};

export default Mod;