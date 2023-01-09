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
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                News
              </Typography>
              <Button onClick={() => navigate("/rq-home")} color="inherit">
                home
              </Button>
              <Button onClick={() => navigate("/super-hero")} color="inherit">
                RQ Super Heros
              </Button>
              <Button
                onClick={() => navigate("/rq-super-heros")}
                color="inherit"
              >
                Super Heros
              </Button>
            </Toolbar>
          </AppBar>
        </Box>
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
