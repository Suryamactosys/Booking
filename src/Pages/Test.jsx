import { Box, Button } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Test = () => {
  const notify = () => toast.info("Login successfully");

  return (
    <Box sx={{ textAlign: "center", paddingTop: "50px" }}>
      <h1>Login page</h1>
      <Button
        onClick={notify}
        sx={{
          width: "100px",
          backgroundColor: "green",
          color: "#fff",
          marginTop: "20px",
        }}>
        Login
      </Button>
      <ToastContainer position="top-center" />
      <ToastContainer position="top-right" />
    </Box>
  );
};

export default Test;

import { useState } from "react";

export const DiwaliVacationApplication = () => {
  const [name, setName] = useState("");
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted Data:", {
      name,
      destination,
      departureDate,
      returnDate,
    });
  };

  return (
    <div>
      <h2>Diwali Vacation Application</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Destination:
          <input
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
        </label>
        <br />
        <label>
          Departure Date:
          <input
            type="date"
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
          />
        </label>
        <br />
        <label>
          Return Date:
          <input
            type="date"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
