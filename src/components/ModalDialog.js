import React from "react";
import Dialog from "@material-ui/core/Dialog";
import Form from "./Form";
import Forms from "./sign";
const ModalDialog = ({ open, handleClose }) => {
  return (
    // props received from App.js
    <Dialog open={open} onClose={handleClose}>
      {/* form to be created */}
      <Form handleClose={handleClose} />
      <p
        style={{
          color: "rgb(3, 39, 117)",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        OR
      </p>
      <Forms handleClose={handleClose} />
    </Dialog>
  );
};

export default ModalDialog;
