import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function NestedModal() {
  const [open, setOpen] = React.useState(false);
  const [openChild, setChildOpen] = React.useState(false);
  const toggleOpenParent = () => {
    setOpen(!open);
  };
  const toggleChild = () => {
    setChildOpen(!openChild);
  };

  return (
    <div>
      <Button onClick={toggleOpenParent}>Open modal</Button>
      <Modal open={open} onClose={toggleOpenParent}>
        <Box sx={{ ...style, width: 400 }}>
          <Button
            onClick={() => {
              toggleChild();
              toggleOpenParent();
            }}
          >
            Open Child Modal
          </Button>
        </Box>
      </Modal>
      <React.Fragment>
        <Modal hideBackdrop open={openChild} onClose={toggleChild}>
          <Box sx={{ ...style, width: 200 }}>
            <Button onClick={toggleChild}>Close Child Modal</Button>
          </Box>
        </Modal>
      </React.Fragment>
    </div>
  );
}
