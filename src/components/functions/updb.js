import { useState } from "react";
import Button from "@material-ui/core/Button";
<<<<<<< HEAD
import Mdbuy from "./mdupbuy";
=======
import Mdbuy from "./mdbuy";
>>>>>>> 1d3b6e53ebfe4dbe98256e52631398e02cb23c68
const Updateb = () => {
  //   declare a new state variable for modal open
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
      <Mdbuy open={open} handleClose={handleClose} />
    </div>
  );
};

export default Updateb;