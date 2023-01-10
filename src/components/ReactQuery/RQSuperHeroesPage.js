import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import { Container } from "@mui/system";
import { useQuery } from "react-query";
import axios from "axios";

export const RQSuperHeroesPage = () => {
  const navigate = useNavigate();
  const { isLoading, data } = useQuery("super-heros", () => {
    return axios.get("http://localhost:4000/superheroes");
  });
  return (
    <Box>
      <Container>
        <Box>
          <Typography>RQ Super Hero Page</Typography>
          {isLoading ? (
            <Typography>Loading...</Typography>
          ) : (
            data?.data.map((item) => <Box key={item.id}>{item.name}</Box>)
          )}
        </Box>
      </Container>
    </Box>
  );
};
