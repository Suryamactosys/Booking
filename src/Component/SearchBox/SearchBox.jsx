import { useRef, useState } from "react";
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Test from "./Test";
import { radioOptions } from "../../Data";
// import { cityNames } from "../../Data";
import {
  Box,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  Link,
  // Autocomplete,
  // TextField,
  // FormControl,
  Button,
} from "@mui/material";
// import AutocompleteBox from "./AutocompleteBox";
// import { fareTypes } from "../../Data";
import YourComponent from "./Popup";

const SearchBox = () => {
  const [selectedOption, setSelectedOption] = useState("option1");
  // const [departureDate, setDepartureDate] = useState();
  // const [returnDate, setReturnDate] = useState("");

  const dateRef = useRef();

  console.log(dateRef.current);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // const handleDepartureDateChange = (date) => {
  //   setDepartureDate(date);
  // };

  // const handleReturnDateChange = (date) => {
  //   setReturnDate(date);
  //   console.log(returnDate);
  // };

  // const [selectedFareType, setSelectedFareType] = useState(fareTypes[0].label);

  // const handleFareTypeChange = (event) => {
  //   setSelectedFareType(event.target.value);
  // };

  // const handleClose = (event) => {
  //   setSelectedFareType(event.target.value);
  // };

  return (
    <Box
      borderRadius={2}
      minHeight={320}
      width={"1220px"}
      bgcolor={"#fff"}
      padding={2}>
      <Box sx={{ paddingTop: "40px" }}>
        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
          <RadioGroup value={selectedOption} onChange={handleOptionChange} row>
            {radioOptions.map((option) => (
              <FormControlLabel
                key={option.value}
                value={option.value}
                control={<Radio color="primary" />}
                label={option.label}
              />
            ))}
          </RadioGroup>
          <Box>
            <Typography>
              Book{" "}
              <Link
                href="#"
                color="textPrimary"
                sx={{ textDecoration: "none" }}>
                International
              </Link>{" "}
              and{" "}
              <Link
                href="#"
                color="textPrimary"
                sx={{ textDecoration: "none" }}>
                Domestic Flights
              </Link>{" "}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Test />
      <YourComponent />
      <Box sx={{ marginTop: "5px", marginLeft: "460px" }}>
        <Button
          variant="contained"
          size="large"
          sx={{
            width: "220px",
            height: "45px",
            borderRadius: "50px",
            color: "#fff",
            fontWeight: "600",
            fontSize: "22px",
            background: "linear-gradient(93deg, #53b2fe, #065af3)",
            position: "absolute",
          }}>
          Search
        </Button>
      </Box>
    </Box>
  );
};

export default SearchBox;