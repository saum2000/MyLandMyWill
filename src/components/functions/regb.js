import { useState } from "react";
import Button from "@material-ui/core/Button";
import Mod from "./modb";

const Regb = () => {
  const [open, setOpen] = useState(false);

  // function to handle modal open
  const handleOpen = () => {
    setOpen(true);
  };

  // function to handle modal close
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="App">
      {/* <Form/> */}

      <Button
        variant="contained"
        color="primary"
        style={{ color: " white", fontWeight: "bold" }}
        onClick={handleOpen}
      >
        Click Here
      </Button>
      {/* display the modal and pass props */}
      <Mod open={open} handleClose={handleClose} />
    </div>
  );
};

export default Regb;
