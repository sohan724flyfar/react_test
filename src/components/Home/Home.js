import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Checkbox, FormControlLabel } from "@mui/material";

const Home = () => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "fitContent",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [state, setState] = useState(false);
  const [reissue, setReIssue] = useState([
    { name: "sohan", age: "20" },
    { name: "sohan", age: "20" },
  ]);

  const handleClick = (index) => {
    const e = window.event;
    const tempData = [...reissue];
    tempData[index] = { ...tempData[index], state: e.target.checked };
    setReIssue(tempData);
  };
  const data = reissue.filter((item) => item.state === true);
  // console.log(data);
  // console.log(reissue);
  return (
    <>
      <table>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Action</th>
        </tr>
        <tbody>
          {reissue.map((i, index) => (
            <tr key={index}>
              <td>{i.name}</td>
              <td>{i.age}</td>
              <td>
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={() => {
                        handleClick(index);
                      }}
                    />
                  }
                  label="Label"
                />
                {/* <Button
                  onClick={() => {
                    handleClick(index);
                  }}
                >
                  Change
                </Button> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default Home;
