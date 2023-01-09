import { Box, Button, Container } from "@mui/material";
import React, { useState } from "react";

const VoiceNotification = ({ data }) => {
  const dataForNotification = data.filter((item) => item.status === "Hold");
  const handleVoiceNotification = () => {};
  return (
    <Container>
      <Box sx={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
        <Button variant="contained">Start Voice Alert</Button>
        <Button variant="contained">Stop Voice Alert</Button>
      </Box>
    </Container>
  );
};

export default VoiceNotification;
