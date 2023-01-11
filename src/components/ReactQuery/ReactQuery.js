import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { Container } from "@mui/system";

export const ReactQuery = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <Container>
        <Typography>Home Page</Typography>
      </Container>
    </Box>
  );
};
