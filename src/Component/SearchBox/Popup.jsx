// import React from 'react';
// import { Button, List, ListItem, Typography } from "@mui/material";

// const YourComponent = () => {
//   return (
//     <div className="fltTravellers gbTravellers">
//       <div className="appendBottom20">
//         <Typography
//           data-cy="adultRange"
//           className="latoBold font12 grayText appendBottom10">
//           ADULTS (12y+)
//         </Typography>
//         <Typography className="appendTop5 greyText">
//           on the day of travel
//         </Typography>
//         <List className="guestCounter font12 darkText gbCounter" style={{ display: "flex" }}>
//           {Array.from({ length: 10 }, (_, index) => (
//             <ListItem
//               key={index}
//               data-cy={`adults-${index + 1}`}
//               className={index === 0 ? "selected" : ""}>
//               {index === 9 ? ">9" : index + 1}
//             </ListItem>
//           ))}
//         </List>
//         <div className="gbTravelTooltip">
//           Save on bookings with more than 9 travellers
//         </div>
//         <div className="makeFlex appendBottom25">
//           <div className="makeFlex column childCounter">
//             <Typography
//               data-cy="childrenRange"
//               className="latoBold font12 grayText appendBottom10">
//               CHILDREN (2y - 12y)
//             </Typography>
//             <Typography className="appendTop5 greyText">
//               on the day of travel
//             </Typography>
//             <List className="guestCounter font12 darkText gbCounter" style={{ display: "flex" }}>
//               {Array.from({ length: 7 }, (_, index) => (
//                 <ListItem
//                   key={index}
//                   data-cy={`children-${index}`}
//                   className={index === 0 ? "selected" : ""}>
//                   {index}
//                 </ListItem>
//               ))}
//               <ListItem data-cy="children-7" className="">
//                 &gt;6
//               </ListItem>
//             </List>
//           </div>
//           <div className="makeFlex column pushRight infantCounter">
//             <Typography
//               data-cy="infantRange"
//               className="latoBold font12 grayText appendBottom10">
//               INFANTS (below 2y)
//             </Typography>
//             <Typography className="appendTop5 greyText">
//               on the day of travel
//             </Typography>
//             <List className="guestCounter font12 darkText gbCounter" style={{ display: "flex" }}>
//               {Array.from({ length: 7 }, (_, index) => (
//                 <ListItem
//                   key={index}
//                   data-cy={`infants-${index}`}
//                   className={index === 0 ? "selected" : ""}>
//                   {index}
//                 </ListItem>
//               ))}
//               <ListItem data-cy="infants-7" className="">
//                 &gt;6
//               </ListItem>
//             </List>
//           </div>
//         </div>
//         <Typography
//           data-cy="chooseTravelClass"
//           className="latoBold font12 grayText appendBottom10">
//           CHOOSE TRAVEL CLASS
//         </Typography>
//         <List className="guestCounter classSelect font12 darkText" style={{ display: "flex" }}>
//           <ListItem data-cy="travelClass-0" className="">
//             Economy/Premium Economy
//           </ListItem>
//           <ListItem data-cy="travelClass-1" className="">
//             Premium Economy
//           </ListItem>
//           <ListItem data-cy="travelClass-2" className="selected">
//             Business
//           </ListItem>
//         </List>
//       </div>
//       <div className="right makeFlex hrtlCenter">
//         <div />
//         <Button
//           type="button"
//           data-cy="travellerApplyBtn"
//           className="primaryBtn btnApply pushRight"
//           variant="contained">
//           APPLY
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default YourComponent;

import { useState } from "react";
import "./Popup.css";
import { fareTypes } from "../../Data";
import { Box, Button, List, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Popup = () => {
  const [selectedFareType, setSelectedFareType] = useState("");

  const handleFareTypeChange = (e) => {
    setSelectedFareType(e.target.value);
    console.log(selectedFareType);
  };
  return (
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
              <li key={fareType.label} className="font12 blackText wrapFilter">
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
          {/* <span className="font12 latoBold">Trending Searches:</span> */}
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
  );
};

export default Popup;
