import { useRef, useState } from "react";
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Test from "./Test";
import "./Search.css";
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
  List,
} from "@mui/material";
// import AutocompleteBox from "./AutocompleteBox";
import { fareTypes } from "../../Data";
import {
  Navigate,
  createSearchParams,
  useSearchParams,
} from "react-router-dom";

const SearchBox = () => {
  const [selectedOption, setSelectedOption] = useState("option1");
  const [selectedCities, setSelectedCities] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [departureDate, setDepartureDate] = useState();
  const [returnDate, setReturnDate] = useState("");
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedTraveler, setSelectedTraveler] = useState("");
  const [selectedFareType, setSelectedFareType] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();

  console.log("search params", searchParams.get("selectedOption"));

  const dateRef = useRef();

  console.log(dateRef.current);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleFareTypeChange = (e) => {
    setSelectedFareType(e.target.value);
    console.log(selectedFareType);
  };

  const handleSearch = () => {
    let searchData = {
      selectedOption,
      departureDate,
      returnDate,
      selectedTraveler,
      selectedClass,
      selectedFareType,
      selectedCities,
      selectedCity,
    };

    let searchUrl = createSearchParams(searchData);

    Navigate({
      pathname: "/flightfilters",
      search: `?${searchUrl}`,
    });

    console.log("searchUrl", searchUrl);
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
      <Box style={{ padding: "5px", paddingTop: "20px" }}>
        <Box style={{ display: "flex" }}>
          <Box className="d-flex align-items-center">
            <ul
              className="specialFareNew"
              style={{ width: "85%", backgroundColor: "#F2F2F2" }}>
              <li>
                <span>Select A Fare Type:</span>
              </li>
              {fareTypes.map((fareType) => (
                <li
                  key={fareType.label}
                  className="font12 blackText wrapFilter">
                  <label>
                    <input
                      type="radio"
                      value={fareType.label}
                      checked={selectedFareType === fareType.label}
                      onChange={handleFareTypeChange}
                    />{" "}
                    {fareType.label}
                  </label>
                  {selectedFareType === fareType.label && (
                    <Box
                      sx={{
                        paddingTop: "20px",
                        backgroundColor: "#249995",
                        color: "white",
                        padding: "5px",
                        borderRadius: "5px",
                        zIndex: "3",
                      }}>
                      <Typography sx={{ fontSize: "12px" }}>
                        {fareType.label}
                      </Typography>
                      <Box
                        sx={{
                          height: "auto",
                          width: "140px",
                        }}>
                        {fareType.message}
                      </Box>
                    </Box>
                  )}
                </li>
              ))}
            </ul>
          </Box>
          <Box style={{ marginLeft: "-130px" }}>
            {/* <span>Trending Searches:</span> */}
            <Typography style={{ padding: "0px" }}></Typography>
            <List
              style={{
                display: "flex",
                width: "100%",
                gap: "5px",
                paddingLeft: "0px",
              }}>
              <li style={{ paddingTop: "0px" }}>
                <span>
                  Trending <br /> Searches:
                </span>
              </li>
              <li>
                <Link to="/">
                  <Button
                    variant="outlined"
                    sx={{
                      backgroundColor: "#F2F2F2",
                      color: "black",
                      fontSize: "12px",
                      border: "none",
                    }}>
                    Mumbai → Bangkok
                  </Button>{" "}
                </Link>
              </li>
              <li>
                <Link to="/">
                  <Button
                    variant="outlined"
                    sx={{
                      backgroundColor: "#F2F2F2",
                      color: "black",
                      fontSize: "12px",
                      border: "none",
                    }}>
                    Delhi → Paris
                  </Button>
                </Link>
              </li>
            </List>
          </Box>
        </Box>
      </Box>
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
          }}
          onClick={handleSearch}>
          Search
        </Button>
      </Box>
    </Box>
  );
};

export default SearchBox;
