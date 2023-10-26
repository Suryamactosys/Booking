// import * as React from 'react';
// import Grid from '@mui/material/Grid';
// import FormLabel from '@mui/material/FormLabel';
// import FormControl from '@mui/material/FormControl';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import RadioGroup from '@mui/material/RadioGroup';
// import Radio from '@mui/material/Radio';
// import Paper from '@mui/material/Paper';
// // import HighlightedCode from 'docs/src/modules/components/HighlightedCode';

// export default function Test() {
//     const [spacing, setSpacing] = React.useState(2);

//     const handleChange = (event) => {
//         setSpacing(Number(event.target.value));
//     };

//     //     const jsx = `
//     // <Grid container spacing={${spacing}}>
//     // `;

//     return (
//         <Grid sx={{ flexGrow: 1 }} container spacing={2}>
//             <Grid item xs={12}>
//                 <Grid container justifyContent="center" spacing={spacing}>
//                     {[0, 1, 2, 3, 4].map((value) => (
//                         <Grid key={value} item>
//                             <Paper
//                                 sx={{
//                                     height: 120,
//                                     width: 225,
//                                     backgroundColor: (theme) =>
//                                         theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//                                 }}
//                             />
//                         </Grid>
//                     ))}
//                 </Grid>
//             </Grid>
//             <Grid item xs={12}>
//                 <Paper sx={{ p: 2 }}>
//                     <Grid container>
//                         <Grid item>
//                             <FormControl component="fieldset">
//                                 <FormLabel component="legend">spacing</FormLabel>
//                                 <RadioGroup
//                                     name="spacing"
//                                     aria-label="spacing"
//                                     value={spacing.toString()}
//                                     onChange={handleChange}
//                                     row
//                                 >
//                                     {[0, 0.5, 1, 2, 3, 4, 8, 12].map((value) => (
//                                         <FormControlLabel
//                                             key={value}
//                                             value={value.toString()}
//                                             control={<Radio />}
//                                             label={value.toString()}
//                                         />
//                                     ))}
//                                 </RadioGroup>
//                             </FormControl>
//                         </Grid>
//                     </Grid>
//                 </Paper>
//                 {/* <HighlightedCode code={jsx} language="jsx" /> */}
//             </Grid>
//         </Grid>
//     );
// }

// import TextField from '@mui/material/TextField';
// import Box from '@mui/material/Box';
// import { useState } from 'react';
// import { cityNames } from '../../Data';
// import Autocomplete from '@mui/material/Autocomplete';

// const YourComponent = () => {

//     const [selectedCity, setSelectedCity] = useState('');

//     const handleCityChange = (event, value) => {
//         setSelectedCity(value);
//     };
//     return (
//         <Box className="flt_fsw_inputBox searchCity inactiveWidget">
//             <label htmlFor="fromCity">
//                 <span className="lbl_input appendBottom10">From</span>
//                 <Autocomplete
//                     disablePortal
//                     selected={selectedCity}
//                     id="combo-box-demo"
//                     options={cityNames}
//                     sx={{ width: 300 }}
//                     onChange={handleCityChange}
//                     renderInput={(params) => <TextField {...params} label="From" />}
//                 />
//                 {selectedCity && (
//                     <p>{selectedCity.label}</p>
//                 )}
//             </label>
//         </Box>
//     );
// };

// export default YourComponent;

// import './Test.css';

// const Test = () => {
//     return (
//         <div className="fsw_inner" style={{ display: 'flex', border: '1px solid black' }}>
//             <div className="flt_fsw_inputBox searchCity inactiveWidget">
//                 <label htmlFor="fromCity">
//                     <span className="lbl_input appendBottom10">From</span>
//                     <input
//                         data-cy="fromCity"
//                         id="fromCity"
//                         type="text"
//                         className="fsw_inputField lineHeight36 latoBlack font30"
//                         readOnly=""
//                         defaultValue="New Delhi"
//                     />
//                     <p
//                         className="code makeRelative"
//                         title="DEL, Indira Gandhi International Airport India"
//                     >
//                         <span className="truncate airPortName " title="">
//                             DEL, Indira Gandhi International Airport India
//                         </span>
//                     </p>
//                 </label>
//             </div>
//             <div className="flt_fsw_inputBox searchToCity inactiveWidget ">
//                 <label htmlFor="toCity">
//                     <span className="lbl_input appendBottom10">To</span>
//                     <input
//                         data-cy="toCity"
//                         id="toCity"
//                         type="text"
//                         className="fsw_inputField lineHeight36 latoBlack font30"
//                         readOnly=""
//                         defaultValue="Bangkok"
//                     />
//                     <p className="code makeRelative" title="BKK, Bangkok Thailand">
//                         <span className="truncate airPortName " title="">
//                             BKK, Bangkok Thailand
//                         </span>
//                     </p>
//                 </label>
//             </div>
//             <div className="flt_fsw_inputBox dates inactiveWidget ">
//                 <label htmlFor="departure">
//                     <span className="lbl_input appendBottom10">Departure</span>
//                     <input
//                         data-cy="departure"
//                         id="departure"
//                         type="text"
//                         className="fsw_inputField font20"
//                         readOnly=""
//                         defaultValue="Thursday, 19 Oct 2023"
//                     />
//                     <p data-cy="departureDate" className="blackText font20 code lineHeight36">
//                         <span className="font30 latoBlack">19 </span>
//                         <span>Oct</span>
//                         <span className="shortYear">23</span>
//                     </p>
//                     <p data-cy="departureDay" className="code ">
//                         Thursday
//                     </p>
//                 </label>
//             </div>
//             <div className="flt_fsw_inputBox dates reDates inactiveWidget  ">
//                 <div className="returnPersuasionTooltip hide">
//                     <p>
//                         Return fares may hike due to high demand. Book now using myBiz special
//                         fare &amp; cancel/change date for FREE later if plan changes
//                     </p>
//                 </div>
//                 <label htmlFor="return">
//                     <span className="lbl_input appendBottom10">Return</span>
//                     <input
//                         data-cy="return"
//                         id="return"
//                         type="text"
//                         className="fsw_inputField font20"
//                         readOnly=""
//                         defaultValue="Friday, 20 Oct 2023"
//                     />
//                     <p data-cy="returnDate" className="blackText font20 code lineHeight36">
//                         <span className="font30 latoBlack">20 </span>
//                         <span>Oct</span>
//                         <span className="shortYear">23</span>
//                     </p>
//                     <p data-cy="returnDay" className="code ">
//                         Friday
//                     </p>
//                 </label>
//                 <p className="dateErrorMsgForFlight whiteText" id="range_error">
//                     You are booking for more than 30 days
//                 </p>
//                 <span className="fltReturnCross flightsSprite" />
//             </div>
//             <div
//                 data-cy="flightTraveller"
//                 className="flt_fsw_inputBox flightTravllers inactiveWidget "
//             >
//                 <label htmlFor="travellers">
//                     <span className="lbl_input appendBottom5">Travellers &amp; Class</span>
//                     <input
//                         data-cy="travellers"
//                         id="travellers"
//                         type="text"
//                         className="fsw_inputField font30 latoBlack"
//                         readOnly=""
//                         defaultValue="0 Infant, 0 Adult, 1 Children"
//                     />
//                     <p className="blackText font20 code lineHeight36">
//                         <span data-cy="travellerText" className="appendRight10">
//                             <span className="font30 latoBlack">1&nbsp;</span>Traveller
//                         </span>
//                     </p>
//                     <p className="">Economy/Premium Economy</p>
//                 </label>
//                 <div className="introGBFlt">
//                     <div className="introGBFltTooltip whiteText">
//                         Save on bookings with more than 9 travellers
//                     </div>
//                 </div>
//             </div>
//         </div>

//     )
// }

// export default Test;

import "./Test.css";
import { Box, Grid, Typography } from "@mui/material";
import AutocompleteBox from "./AutocompleteBox";
import Demo from "./Demo";
import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import Ram from "./Ram";

const Test = () => {
  const [departureDate, setDepartureDate] = useState();
  const handleDepartureDateChange = (date) => {
    setDepartureDate(date);
  };

  const [returnDate, setReturnDate] = useState("");
  const handleReturnDateChange = (date) => {
    setReturnDate(date);
    console.log(returnDate);
    const [start, end] = date;
    setStartDate(start);
    setEndDate(end);
  };

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  return (
    <Box>
      <Grid container style={{ borderRadius: "8px" }}>
        <Grid
          xs={3}
          sx={{
            display: "flex",
            alignItems: "stretch",
            border: "1px solid #010b3317",
            paddingLeft: "10px",
            paddingRight: "0px",
            borderRadius: "8px 0px 0px 8px",
          }}>
          <AutocompleteBox label={"from"} />
        </Grid>
        <Typography className="swipCircle">
          <SyncAltIcon style={{ color: "blue" }} />
        </Typography>
        <Grid
          xs={3}
          sx={{
            display: "flex",
            alignItems: "stretch",
            border: "1px solid #010b3317",
            paddingLeft: "15px",
            paddingRight: "0px",
          }}>
          <Demo label={"to"} />
        </Grid>
        <Grid
          xs={2}
          sx={{
            border: "1px solid #010b3317",
            padding: "10px",
          }}>
          <span style={{ fontSize: "18px" }}>Departure</span>
          <ReactDatePicker
            selected={departureDate}
            onChange={handleDepartureDateChange}
            dateFormat="EEEE, d MMM yyyy"
            calendarClassName="rasta-stripes"
            placeholderText="Select a departure date"
            startDate={startDate}
            endDate={endDate}
          />
          {departureDate && (
            <>
              <p style={{ fontSize: "20px" }} tabIndex="4">
                <span style={{ fontWeight: "900", fontSize: "22px" }}>
                  {departureDate.getDate()}{" "}
                </span>
                <span>
                  {departureDate.toLocaleDateString("en-US", {
                    month: "short",
                  })}{" "}
                </span>
                <span>{departureDate.getFullYear().toString().slice(-2)}</span>
              </p>
              <p tabIndex="5">
                {departureDate.toLocaleDateString("en-US", {
                  weekday: "long",
                })}
              </p>
            </>
          )}
        </Grid>
        <Grid
          xs={2}
          sx={{
            border: "1px solid #010b3317",
            padding: "10px",
          }}>
          <span style={{ fontSize: "18px" }}>Return</span>
          <ReactDatePicker
            selected={returnDate}
            onChange={handleReturnDateChange}
            dateFormat="EEEE, d MMM yyyy"
            readOnly=""
            placeholderText="Select a return date"
          />
          {returnDate && (
            <>
              <p style={{ fontSize: "20px" }}>
                <span style={{ fontWeight: "900", fontSize: "22px" }}>
                  {returnDate.getDate()}{" "}
                </span>
                <span>
                  {returnDate.toLocaleDateString("en-US", {
                    month: "short",
                  })}{" "}
                </span>
                <span>{returnDate.getFullYear().toString().slice(-2)}</span>
              </p>
              <p>
                {returnDate.toLocaleDateString("en-US", {
                  weekday: "long",
                })}
              </p>
            </>
          )}
        </Grid>
        <Grid
          xs={2}
          sx={{
            border: "1px solid #010b3317",
            padding: "10px",
            borderRadius: "0px 8px 8px 0px",
          }}>
          <Ram />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Test;

// const Test = () => {
//   const [startDate, setStartDate] = useState(new Date());
//   const [endDate, setEndDate] = useState(null);
//   const onChange = (dates) => {
//     const [start, end] = dates;
//     setStartDate(start);
//     setEndDate(end);
//   };
//   return (
//     <DatePicker
//       selected={startDate}
//       onChange={onChange}
//       minDate={new Date()}
//       maxDate={addMonths(new Date(), 5)}
//       startDate={startDate}
//       endDate={endDate}
//       selectsRange
//       inline
//       showDisabledMonthNavigation
//     />
//   );
// };
