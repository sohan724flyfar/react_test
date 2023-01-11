import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { Container } from "@mui/system";
import { useQuery } from "react-query";
import axios from "axios";

export const RQSuperHeroesPage = () => {
  const navigate = useNavigate();

  const fetchingData = () => {
    return axios.get("http://localhost:4000/superheroes");
  };

  const onSuccess = (data) => {
    console.log("Perform side Effects after data fetching", data);
  };
  const onError = (error) => {
    console.log(
      "Perform side Effects after encountering fetching error",
      error
    );
  };

  const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
    "super-heros",
    fetchingData,
    {
      // cacheTime:5000,
      // staleTime:30000,
      // refetchOnMount:true,
      // refetchOnWindowFocus:true,
      //refetchInterval:1000,
      //refetchIntervalInBackground:true,
      //enabled:false
      onSuccess,
      onError,
      select: (data) => {
        const names = data.data.map((item) => item.name);
        return names;
      },
    }
  );
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }
  return (
    <Box>
      <Container sx={{ mt: "20px" }}>
        {/* <button onClick={refetch}>Fetch</button> */}
        {/* <Box>
          <Typography>Super Hero Page</Typography>
          {data?.data.map((item) => (
            <Box key={item.id}>{item.name}</Box>
          ))}
        </Box> */}
        <Box>
          <Typography sx={{ mb: "20px" }}>Super Hero Page</Typography>
          {data.map((item) => (
            <Box key={item}>{item}</Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};
