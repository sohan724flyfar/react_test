import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import { Container } from "@mui/system";

export const SuperHeroesPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    setIsLoading(false);
    fetch("http://localhost:4000/superheroes")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setIsLoading(true);
      });
  }, []);
  if (isLoading)
    <>
      <Typography>Loading...</Typography>
    </>;
  return (
    <Box>
      <Container>
        <Box>
          <Typography>Super Hero Page</Typography>
          {data.map((item) => (
            <Box key={item.id}>{item.name}</Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};
