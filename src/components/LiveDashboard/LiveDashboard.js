import { Box, CircularProgress, Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import VoiceNotification from "../VoiceNotification/VoiceNotification";
import { Stack } from "@mui/system";

const LiveDashboard = () => {
  const [isLoading, setIsloading] = useState(false);
  const [data, setData] = useState({});
  const [bookingData, setBookingData] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    setIsloading(false);
    const interval = setInterval(() => {
      const url =
        "https://api.flyfarint.com/v.1.0.0/Admin/Stats/Dashboard1.php?booking";
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setIsloading(true);
          setBookingData(data?.TotalBookingData);
        });
    }, [1000]);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <Box>
      <Container sx={{ marginTop: "50px" }}>
        <Box>
          <VoiceNotification data={bookingData} />
        </Box>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Sl No</TableCell>
                <TableCell align="right">Booking Id</TableCell>
                <TableCell align="right">Status</TableCell>
                <TableCell align="right">System</TableCell>
                <TableCell align="right">PNR</TableCell>
                <TableCell align="right">Company</TableCell>
                <TableCell align="right">Time</TableCell>
                <TableCell align="right">Route</TableCell>
                <TableCell align="right">Type</TableCell>
                <TableCell align="right">Contact</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {bookingData.length !== 0 ? (
                bookingData.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.serial}
                    </TableCell>
                    <TableCell align="right">{row.bookingId}</TableCell>
                    <TableCell align="right">{row.status}</TableCell>
                    <TableCell align="right">{row.gds}</TableCell>
                    <TableCell align="right">{row.pnr}</TableCell>
                    <TableCell align="right">
                      {row?.companyname?.slice(0, 10)}...
                    </TableCell>
                    <TableCell align="right">
                      {new Date(row.lastUpdate).toLocaleTimeString()}
                    </TableCell>
                    <TableCell align="right">
                      {row?.deptFrom + "-" + row?.arriveTo}
                    </TableCell>
                    <TableCell align="right">{row?.tripType}</TableCell>
                    <TableCell align="right">{row?.tripType}</TableCell>
                  </TableRow>
                ))
              ) : (
                <Box sx={{ display: "flex", width: "100%" }}>
                  <CircularProgress />
                </Box>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Box>
  );
};

export default LiveDashboard;
