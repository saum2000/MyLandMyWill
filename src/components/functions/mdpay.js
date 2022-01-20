import React from "react";
import Dialog from "@material-ui/core/Dialog";
import Payform from "./payform";
const Mdpay = ({ open, handleClose }) => {
  return (
    // props received from App.js
    <Dialog open={open} onClose={handleClose}>
      {" "}
      {/* form to be created */} <Payform handleClose={handleClose} />{" "}
    </Dialog>
  );
};

export default Mdpay;
