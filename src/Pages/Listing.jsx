import React, { useState } from "react";
import "./Listing.css";
// import Cheapest from '../assets/Cheapest.png';
// import Fastest from '../assets/Fastest.png';
// import Popular from '../assets/Popular.png';
import {
  Slider,
  Typography,
  Checkbox,
  Box,
  Collapse,
  IconButton,
  Paper,
  Grid,
  Button,
} from "@mui/material";
// import { timeSlotData } from '../Data';
import MorningIcon from "@mui/icons-material/WbSunny";
import NoonIcon from "@mui/icons-material/BrightnessMedium";
import EveningIcon from "@mui/icons-material/Brightness7";
import NightIcon from "@mui/icons-material/NightlightRound";
import LockIcon from "@mui/icons-material/Lock";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { tabs } from "../Data";

function FlightFilters() {
  const [priceRange, setPriceRange] = React.useState([4793, 10800]);

  const handleChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };
  return (
    <>
      <div style={{ padding: "20px" }}>
        <div
          className="filterWrapper"
          style={{ width: "22%", float: "left", padding: "8px" }}>
          <Box>
            <Typography variant="h6" className="filtersHeading" gutterBottom>
              Popular Filters
            </Typography>
            <div className="makeFlex spaceBetween appendBottom12">
              <label className="checkboxContainer">
                <Checkbox
                  id="listingFilterCheckbox1"
                  type="checkbox"
                  name="listingFilterCheckbox"
                  defaultValue="false"
                />
                <div className="checkboxContent">
                  <Typography variant="body1" className="checkboxTitle">
                    Non Stop (8)
                  </Typography>
                </div>
              </label>
              <Typography variant="body1" className="appendLeft5">
                ₹ 4,793
              </Typography>
            </div>
            <div className="makeFlex spaceBetween appendBottom12">
              <label className="checkboxContainer">
                <Checkbox
                  id="listingFilterCheckbox2"
                  type="checkbox"
                  name="listingFilterCheckbox"
                  defaultValue="false"
                />
                <div className="checkboxContent">
                  <Typography variant="body1" className="checkboxTitle">
                    Prenoon Departure (7)
                  </Typography>
                </div>
              </label>
              <Typography variant="body1" className="appendLeft5">
                ₹ 5,409
              </Typography>
            </div>
            <div className="makeFlex spaceBetween appendBottom12">
              <label className="checkboxContainer">
                <Checkbox
                  id="listingFilterCheckbox3"
                  type="checkbox"
                  name="listingFilterCheckbox"
                  defaultValue="false"
                />
                <div className="checkboxContent">
                  <Typography variant="body1" className="checkboxTitle">
                    IndiGo (13)
                  </Typography>
                </div>
              </label>
              <Typography variant="body1" className="appendLeft5">
                ₹ 5,665
              </Typography>
            </div>
            <div className="makeFlex spaceBetween appendBottom12">
              <label className="checkboxContainer">
                <Checkbox
                  id="listingFilterCheckbox4"
                  type="checkbox"
                  name="listingFilterCheckbox"
                  defaultValue="false"
                />
                <div className="checkboxContent">
                  <Typography variant="body1" className="checkboxTitle">
                    Vistara (2)
                  </Typography>
                </div>
              </label>
              <Typography variant="body1" className="appendLeft5">
                ₹ 5,922
              </Typography>
            </div>
            <Collapse in={isCollapsed}>
              <div>
                <div className="makeFlex spaceBetween appendBottom12">
                  <label className="checkboxContainer">
                    <Checkbox
                      id="listingFilterCheckbox5"
                      type="checkbox"
                      name="listingFilterCheckbox"
                      defaultValue="false"
                    />
                    <div className="checkboxContent">
                      <Typography variant="body1" className="checkboxTitle">
                        Air India (2)
                      </Typography>
                    </div>
                  </label>
                  <Typography variant="body1" className="appendLeft5">
                    ₹ 5,409
                  </Typography>
                </div>
                <div className="makeFlex spaceBetween appendBottom12">
                  <label className="checkboxContainer">
                    <Checkbox
                      id="listingFilterCheckbox5"
                      type="checkbox"
                      name="listingFilterCheckbox"
                      defaultValue="false"
                    />
                    <div className="checkboxContent">
                      <Typography variant="body1" className="checkboxTitle">
                        Late Departures (5)
                      </Typography>
                    </div>
                  </label>
                  <Typography variant="body1" className="appendLeft5">
                    ₹ 4,793
                  </Typography>
                </div>
                <div className="makeFlex spaceBetween appendBottom12">
                  <label className="checkboxContainer">
                    <Checkbox
                      id="listingFilterCheckbox5"
                      type="checkbox"
                      name="listingFilterCheckbox"
                      defaultValue="false"
                    />
                    <div className="checkboxContent">
                      <Typography variant="body1" className="checkboxTitle">
                        Morning Departures (1)
                      </Typography>
                    </div>
                  </label>
                  <Typography variant="body1" className="appendLeft5">
                    ₹ 7,705
                  </Typography>
                </div>
                <div className="makeFlex spaceBetween appendBottom12">
                  <label className="checkboxContainer">
                    <Checkbox
                      id="listingFilterCheckbox5"
                      type="checkbox"
                      name="listingFilterCheckbox"
                      defaultValue="false"
                    />
                    <div className="checkboxContent">
                      <Typography variant="body1" className="checkboxTitle">
                        1 Stop (9)
                      </Typography>
                    </div>
                  </label>
                  <Typography variant="body1" className="appendLeft5">
                    ₹ 6,857
                  </Typography>
                </div>
                <div className="makeFlex spaceBetween appendBottom12">
                  <label className="checkboxContainer">
                    <Checkbox
                      id="listingFilterCheckbox5"
                      type="checkbox"
                      name="listingFilterCheckbox"
                      defaultValue="false"
                    />
                    <div className="checkboxContent">
                      <Typography variant="body1" className="checkboxTitle">
                        Refundable Fares (17)
                      </Typography>
                    </div>
                  </label>
                  <Typography variant="body1" className="appendLeft5">
                    ₹ 4,793
                  </Typography>
                </div>
              </div>
            </Collapse>
            <p className="appendBottom15">
              <span className="linkText pointer" onClick={toggleCollapse}>
                {isCollapsed ? "Show less" : "Show more"}
              </span>
            </p>
          </Box>
          <div className="filtersOuter">
            <Typography className="filtersHeading appendBottom15" variant="h6">
              One Way Price
            </Typography>
            <div>
              <div className="filtersOuter mapSlider">
                <Slider
                  value={priceRange}
                  onChange={handleChange}
                  valueLabelDisplay="auto"
                  valueLabelFormat={(value) => `₹${value}`}
                  min={4800}
                  max={10800}
                  step={1}
                  sx={{ width: "100%" }}
                />
                <div className="makeFlex spaceBetween darkText">
                  <span>₹{priceRange[0]}</span>
                  <span>₹{priceRange[1]}</span>
                </div>
              </div>
            </div>
          </div>
          <Box className="filtersOuter">
            <Typography variant="h6" className="filtersHeading" gutterBottom>
              Stops From Indore
            </Typography>
            <div>
              <div className="makeFlex spaceBetween appendBottom12">
                <label className="checkboxContainer">
                  <Checkbox
                    id="listingFilterCheckbox1"
                    type="checkbox"
                    name="listingFilterCheckbox"
                    defaultValue="false"
                  />
                  <div className="checkboxContent">
                    <Typography variant="body1" className="checkboxTitle">
                      Non Stop (8)
                    </Typography>
                  </div>
                </label>
                <Typography variant="body1" className="appendLeft5">
                  ₹ 4,793
                </Typography>
              </div>
              <div className="makeFlex spaceBetween appendBottom12">
                <label className="checkboxContainer">
                  <Checkbox
                    id="listingFilterCheckbox2"
                    type="checkbox"
                    name="listingFilterCheckbox"
                    defaultValue="false"
                  />
                  <div className="checkboxContent">
                    <Typography variant="body1" className="checkboxTitle">
                      1 Stop (9)
                    </Typography>
                  </div>
                </label>
                <Typography variant="body1" className="appendLeft5">
                  ₹ 6,857
                </Typography>
              </div>
              <div className="makeFlex spaceBetween appendBottom12">
                <label className="checkboxContainer">
                  <Checkbox
                    id="listingFilterCheckbox3"
                    type="checkbox"
                    name="listingFilterCheckbox"
                    defaultValue="false"
                  />
                  <div className="checkboxContent">
                    <Typography variant="body1" className="checkboxTitle">
                      1+ Stop (1)
                    </Typography>
                  </div>
                </label>
                <Typography variant="body1" className="appendLeft5">
                  ₹ 6,939
                </Typography>
              </div>
            </div>
          </Box>
          <Box elevation={3} className="filtersOuter">
            <Typography variant="h6" className="filtersHeading appendBottom15">
              Departure From Indore
            </Typography>
            <Grid container>
              <Grid item xs={6} className="timeSlotsOuter">
                <Box className="appendBottom12 filterTimeSlots">
                  <IconButton>
                    <MorningIcon />
                  </IconButton>
                  <Typography variant="subtitle1" className="boldFont">
                    Before <b>6</b> AM
                  </Typography>
                  <Typography variant="body2" className="boldFont">
                    ₹ 8,013
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6} className="timeSlotsOuter">
                <Box className="appendBottom12 filterTimeSlots">
                  <IconButton>
                    <NoonIcon />
                  </IconButton>
                  <Typography variant="subtitle1" className="boldFont">
                    <b>6</b> AM - <b>12</b> PM
                  </Typography>
                  <Typography variant="body2" className="boldFont">
                    ₹ 5,409
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6} className="timeSlotsOuter">
                <Box className="appendBottom12 filterTimeSlots">
                  <IconButton>
                    <EveningIcon />
                  </IconButton>
                  <Typography variant="subtitle1" className="boldFont">
                    <b>12</b> PM - <b>6</b> PM
                  </Typography>
                  <Typography variant="body2" className="boldFont">
                    ₹ 7,240
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6} className="timeSlotsOuter">
                <Box className="appendBottom12 filterTimeSlots">
                  <IconButton>
                    <NightIcon />
                  </IconButton>
                  <Typography variant="subtitle1" className="boldFont">
                    After <b>6</b> PM
                  </Typography>
                  <Typography variant="body2" className="boldFont">
                    ₹ 4,793
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box elevation={3} className="filtersOuter">
            <Typography variant="h6" className="filtersHeading appendBottom15">
              Arrival at New Delhi
            </Typography>
            <Grid container>
              <Grid item xs={6} className="timeSlotsOuter">
                <Box className="appendBottom12 filterTimeSlots">
                  <IconButton>
                    <MorningIcon />
                  </IconButton>
                  <Typography variant="subtitle1" className="boldFont">
                    Before <b>6</b> AM
                  </Typography>
                  <Typography variant="body2" className="boldFont">
                    ₹ 6,365
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6} className="timeSlotsOuter">
                <Box className="appendBottom12 filterTimeSlots">
                  <IconButton>
                    <NoonIcon />
                  </IconButton>
                  <Typography variant="subtitle1" className="boldFont">
                    <b>6</b> AM - <b>12</b> PM
                  </Typography>
                  <Typography variant="body2" className="boldFont">
                    ₹ 5,409
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6} className="timeSlotsOuter">
                <Box className="appendBottom12 filterTimeSlots">
                  <IconButton>
                    <EveningIcon />
                  </IconButton>
                  <Typography variant="subtitle1" className="boldFont">
                    <b>12</b> PM - <b>6</b> PM
                  </Typography>
                  <Typography variant="body2" className="boldFont">
                    ₹ 5,665
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6} className="timeSlotsOuter">
                <Box className="appendBottom12 filterTimeSlots">
                  <IconButton>
                    <NightIcon />
                  </IconButton>
                  <Typography variant="subtitle1" className="boldFont">
                    After <b>6</b> PM
                  </Typography>
                  <Typography variant="body2" className="boldFont">
                    ₹ 4,793
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box>
            <Typography variant="h6" className="filtersHeading" gutterBottom>
              Airlines
            </Typography>
            <div className="makeFlex spaceBetween appendBottom12">
              <label className="checkboxContainer">
                <Checkbox
                  id="listingFilterCheckbox1"
                  type="checkbox"
                  name="listingFilterCheckbox"
                  defaultValue="false"
                />
                <div className="checkboxContent">
                  <Typography variant="body1" className="checkboxTitle">
                    Non Stop (8)
                  </Typography>
                </div>
              </label>
              <Typography variant="body1" className="appendLeft5">
                ₹ 4,793
              </Typography>
            </div>
            <div className="makeFlex spaceBetween appendBottom12">
              <label className="checkboxContainer">
                <Checkbox
                  id="listingFilterCheckbox2"
                  type="checkbox"
                  name="listingFilterCheckbox"
                  defaultValue="false"
                />
                <div className="checkboxContent">
                  <Typography variant="body1" className="checkboxTitle">
                    Prenoon Departure (7)
                  </Typography>
                </div>
              </label>
              <Typography variant="body1" className="appendLeft5">
                ₹ 5,409
              </Typography>
            </div>
            <div className="makeFlex spaceBetween appendBottom12">
              <label className="checkboxContainer">
                <Checkbox
                  id="listingFilterCheckbox3"
                  type="checkbox"
                  name="listingFilterCheckbox"
                  defaultValue="false"
                />
                <div className="checkboxContent">
                  <Typography variant="body1" className="checkboxTitle">
                    IndiGo (13)
                  </Typography>
                </div>
              </label>
              <Typography variant="body1" className="appendLeft5">
                ₹ 5,665
              </Typography>
            </div>
            <div className="makeFlex spaceBetween appendBottom12">
              <label className="checkboxContainer">
                <Checkbox
                  id="listingFilterCheckbox4"
                  type="checkbox"
                  name="listingFilterCheckbox"
                  defaultValue="false"
                />
                <div className="checkboxContent">
                  <Typography variant="body1" className="checkboxTitle">
                    Vistara (2)
                  </Typography>
                </div>
              </label>
              <Typography variant="body1" className="appendLeft5">
                ₹ 5,922
              </Typography>
            </div>
            <Collapse in={isCollapsed}>
              <div>
                <div className="makeFlex spaceBetween appendBottom12">
                  <label className="checkboxContainer">
                    <Checkbox
                      id="listingFilterCheckbox5"
                      type="checkbox"
                      name="listingFilterCheckbox"
                      defaultValue="false"
                    />
                    <div className="checkboxContent">
                      <Typography variant="body1" className="checkboxTitle">
                        Air India (2)
                      </Typography>
                    </div>
                  </label>
                  <Typography variant="body1" className="appendLeft5">
                    ₹ 5,409
                  </Typography>
                </div>
                <div className="makeFlex spaceBetween appendBottom12">
                  <label className="checkboxContainer">
                    <Checkbox
                      id="listingFilterCheckbox5"
                      type="checkbox"
                      name="listingFilterCheckbox"
                      defaultValue="false"
                    />
                    <div className="checkboxContent">
                      <Typography variant="body1" className="checkboxTitle">
                        Late Departures (5)
                      </Typography>
                    </div>
                  </label>
                  <Typography variant="body1" className="appendLeft5">
                    ₹ 4,793
                  </Typography>
                </div>
                <div className="makeFlex spaceBetween appendBottom12">
                  <label className="checkboxContainer">
                    <Checkbox
                      id="listingFilterCheckbox5"
                      type="checkbox"
                      name="listingFilterCheckbox"
                      defaultValue="false"
                    />
                    <div className="checkboxContent">
                      <Typography variant="body1" className="checkboxTitle">
                        Morning Departures (1)
                      </Typography>
                    </div>
                  </label>
                  <Typography variant="body1" className="appendLeft5">
                    ₹ 7,705
                  </Typography>
                </div>
                <div className="makeFlex spaceBetween appendBottom12">
                  <label className="checkboxContainer">
                    <Checkbox
                      id="listingFilterCheckbox5"
                      type="checkbox"
                      name="listingFilterCheckbox"
                      defaultValue="false"
                    />
                    <div className="checkboxContent">
                      <Typography variant="body1" className="checkboxTitle">
                        1 Stop (9)
                      </Typography>
                    </div>
                  </label>
                  <Typography variant="body1" className="appendLeft5">
                    ₹ 6,857
                  </Typography>
                </div>
                <div className="makeFlex spaceBetween appendBottom12">
                  <label className="checkboxContainer">
                    <Checkbox
                      id="listingFilterCheckbox5"
                      type="checkbox"
                      name="listingFilterCheckbox"
                      defaultValue="false"
                    />
                    <div className="checkboxContent">
                      <Typography variant="body1" className="checkboxTitle">
                        Refundable Fares (17)
                      </Typography>
                    </div>
                  </label>
                  <Typography variant="body1" className="appendLeft5">
                    ₹ 4,793
                  </Typography>
                </div>
              </div>
            </Collapse>
            <p className="appendBottom15">
              <span className="linkText pointer" onClick={toggleCollapse}>
                {isCollapsed ? "Show less" : "+ 5 More"}
              </span>
            </p>
          </Box>
        </div>
        <div style={{ width: "75%", float: "right", paddingTop: "20px" }}>
          <Grid className="font24 blackFont whiteText appendBottom20 journey-title makeFlex spaceBetween bottom">
            <span style={{ textAlign: "center" }}>
              <Typography variant="h6">
                Flights from <b>Indore</b> to <b>Mumbai</b>, and back
              </Typography>
            </span>
          </Grid>
          <Grid className="clusterTabs">
            <div
              className="clusterTabsHead appendBottom20"
              style={{ padding: "0px" }}>
              {tabs.map((tab, index) => (
                <div
                  key={index}
                  className={`clusterTabHeadList makeFlex ${
                    activeTab === index ? "active" : ""
                  }`}
                  onClick={() => handleTabClick(index)}>
                  <span className="clusterTabIcon appendRight10">
                    <span
                      className="icon32 bgProperties"
                      style={{ backgroundImage: `url("${tab.imageUrl}")` }}
                    />
                  </span>
                  <div>
                    <Typography className="blackFont blackText">
                      {tab.label}
                    </Typography>
                    <Typography className="blackText fontSize12">
                      {tab.content}
                    </Typography>
                  </div>
                </div>
              ))}
            </div>
          </Grid>
          <Grid className="font24 blackFont whiteText appendBottom20 journey-title makeFlex spaceBetween bottom">
            <span style={{ textAlign: "center" }}>
              <Typography variant="h6">
                Flights from <b>Indore</b> to <b>Mumbai</b>, and back
              </Typography>
            </span>
          </Grid>
          <Paper className="appendBottom15">
            <div className="listingCard appendBottom5">
              <div className="makeFlex hrtlCenter spaceBetween">
                <div className="makeFlex" />
              </div>
              <div className="makeFlex spaceBetween">
                <div className="makeFlex">
                  <div
                    className="makeFlex align-items-center gap-x-10 airline-info-wrapper"
                    style={{ marginTop: "-7px" }}>
                    <span className="singleairline">
                      <span
                        className="arln-logo logo1"
                        style={{
                          backgroundImage:
                            'url("https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/AI.png?v=15")',
                        }}
                      />
                    </span>
                    <div>
                      <Typography
                        variant="h6"
                        className="boldFont blackText airlineName">
                        Alliance Air
                      </Typography>
                      <Typography variant="body2" className="fliCode">
                        9I 632
                      </Typography>
                    </div>
                  </div>
                  <div className="fontSize12 darkText clusterTimingOuter" />
                  <div className="timingOptionOuter">
                    <label
                      className="not-radio"
                      htmlFor="jrnyKey_0_1eae77ce-1c91-4ee3-b2c0-0eb0ed10576c"
                      style={{ cursor: "default" }}>
                      <div className="timingOption">
                        <div className="makeFlex">
                          <div
                            className="makeFlex fontSize12 flexOne gap-x-10"
                            style={{ paddingLeft: "100px", gap: "50px" }}>
                            <div className="flexOne timeInfoLeft">
                              <p className="appendBottom2 flightTimeInfo">
                                <span>19:35</span>
                              </p>
                              <p className="blackText">
                                <font color="#000000">Indore</font>
                              </p>
                            </div>
                            <div className="stop-info flexOne">
                              <p>
                                02<font color="#757575"> h </font>05
                                <font color="#757575"> m </font>
                              </p>
                              <div>
                                <div className="relative fliStopsSep">
                                  <p
                                    className="fliStopsSepLine"
                                    style={{
                                      borderTop: "3px solid rgb(81, 226, 194)",
                                    }}
                                  />
                                </div>
                                <p className="flightsLayoverInfo">Non stop</p>
                              </div>
                            </div>
                            <div className="flexOne timeInfoRight">
                              <p className="appendBottom2 flightTimeInfo">
                                <span>21:40</span>
                              </p>
                              <p className="blackText">
                                <font color="#000000">New Delhi</font>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </label>
                  </div>
                </div>
                <div className="priceSection priceLockPersuasionExists">
                  <div className="makeFlex top gap-x-10">
                    <div
                      className="textRight flexOne"
                      style={{ marginTop: "-5px" }}>
                      <div className="blackText fontSize18 blackFont white-space-no-wrap clusterViewPrice">
                        ₹ 5,528
                        <Typography
                          variant="body2"
                          className="fontSize12 darkText lightFont">
                          per adult
                        </Typography>
                      </div>
                    </div>
                    <Button className="ViewFareBtn text-uppercase clusterBtn">
                      <span className="appendRight8">View Prices</span>
                      <span className="customArrow arrowDown"></span>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="lpTriggerInfo makeFlex right">
                <span className="lockPriceTrigger">
                  <span
                    className="bgProperties icon12 appendRight5"
                    style={{
                      backgroundImage:
                        'url("https://imgak.mmtcdn.com/flights/assets/media/dt/listing/plc.png")',
                    }}></span>
                  <span className="fontSize12 boldFont blueText">
                    <LockIcon />
                    Lock this price for ₹ 343 <ArrowForwardIcon />
                  </span>
                  <span
                    className="bgProperties arrowRightStyle"
                    style={{
                      backgroundImage:
                        'url("https://imgak.mmtcdn.com/flights/assets/media/dt/listing/hb.png")',
                    }}></span>
                </span>
              </div>
              <p
                className="alertMsg appendBottom10 appendTop10"
                style={{
                  backgroundColor: "rgb(255, 237, 209)",
                  minHeight: 22,
                }}>
                Get Rs 200 off using MMTSUPER*
              </p>
              <div className="makeFlex spaceBtwCenter fontSize12 card-footer-v2">
                <div />
                <span className="linkText ctaLink viewFltDtlsCta">
                  View Flight Details
                </span>
              </div>
            </div>
            <div className="collapse" />
            <div className="collapse" />
            <div className="collapse" />
            <div className="collapse" />
          </Paper>
        </div>
        <div style={{ width: "75%", float: "right", paddingTop: "20px" }}>
          <Paper className="appendBottom15">
            <div className="listingCard appendBottom5">
              <div className="makeFlex hrtlCenter spaceBetween">
                <div className="makeFlex" />
              </div>
              <div className="makeFlex spaceBetween">
                <div className="makeFlex">
                  <div
                    className="makeFlex align-items-center gap-x-10 airline-info-wrapper"
                    style={{ marginTop: "-7px" }}>
                    <span className="singleairline">
                      <span
                        className="arln-logo logo1"
                        style={{
                          backgroundImage:
                            'url("https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/AI.png?v=15")',
                        }}
                      />
                    </span>
                    <div>
                      <Typography
                        variant="h6"
                        className="boldFont blackText airlineName">
                        Alliance Air
                      </Typography>
                      <Typography variant="body2" className="fliCode">
                        9I 632
                      </Typography>
                    </div>
                  </div>
                  <div className="fontSize12 darkText clusterTimingOuter" />
                  <div className="timingOptionOuter">
                    <label
                      className="not-radio"
                      htmlFor="jrnyKey_0_1eae77ce-1c91-4ee3-b2c0-0eb0ed10576c"
                      style={{ cursor: "default" }}>
                      <div className="timingOption">
                        <div className="makeFlex">
                          <div
                            className="makeFlex fontSize12 flexOne gap-x-10"
                            style={{ paddingLeft: "100px", gap: "50px" }}>
                            <div className="flexOne timeInfoLeft">
                              <p className="appendBottom2 flightTimeInfo">
                                <span>19:35</span>
                              </p>
                              <p className="blackText">
                                <font color="#000000">Indore</font>
                              </p>
                            </div>
                            <div className="stop-info flexOne">
                              <p>
                                02<font color="#757575"> h </font>05
                                <font color="#757575"> m </font>
                              </p>
                              <div>
                                <div className="relative fliStopsSep">
                                  <p
                                    className="fliStopsSepLine"
                                    style={{
                                      borderTop: "3px solid rgb(81, 226, 194)",
                                    }}
                                  />
                                </div>
                                <p className="flightsLayoverInfo">Non stop</p>
                              </div>
                            </div>
                            <div className="flexOne timeInfoRight">
                              <p className="appendBottom2 flightTimeInfo">
                                <span>21:40</span>
                              </p>
                              <p className="blackText">
                                <font color="#000000">New Delhi</font>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </label>
                  </div>
                </div>
                <div className="priceSection priceLockPersuasionExists">
                  <div className="makeFlex top gap-x-10">
                    <div
                      className="textRight flexOne"
                      style={{ marginTop: "-5px" }}>
                      <div className="blackText fontSize18 blackFont white-space-no-wrap clusterViewPrice">
                        ₹ 5,528
                        <Typography
                          variant="body2"
                          className="fontSize12 darkText lightFont">
                          per adult
                        </Typography>
                      </div>
                    </div>
                    <Button className="ViewFareBtn text-uppercase clusterBtn">
                      <span className="appendRight8">View Prices</span>
                      <span className="customArrow arrowDown"></span>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="lpTriggerInfo makeFlex right">
                <span className="lockPriceTrigger">
                  <span
                    className="bgProperties icon12 appendRight5"
                    style={{
                      backgroundImage:
                        'url("https://imgak.mmtcdn.com/flights/assets/media/dt/listing/plc.png")',
                    }}></span>
                  <span className="fontSize12 boldFont blueText">
                    <LockIcon />
                    Lock this price for ₹ 343 <ArrowForwardIcon />
                  </span>
                  <span
                    className="bgProperties arrowRightStyle"
                    style={{
                      backgroundImage:
                        'url("https://imgak.mmtcdn.com/flights/assets/media/dt/listing/hb.png")',
                    }}></span>
                </span>
              </div>
              <p
                className="alertMsg appendBottom10 appendTop10"
                style={{
                  backgroundColor: "rgb(255, 237, 209)",
                  minHeight: 22,
                }}>
                Get Rs 200 off using MMTSUPER*
              </p>
              <div className="makeFlex spaceBtwCenter fontSize12 card-footer-v2">
                <div />
                <span className="linkText ctaLink viewFltDtlsCta">
                  View Flight Details
                </span>
              </div>
            </div>
          </Paper>
        </div>
        <div style={{ width: "75%", float: "right", paddingTop: "20px" }}>
          <Paper className="appendBottom15">
            <div className="listingCard appendBottom5">
              <div className="makeFlex hrtlCenter spaceBetween">
                <div className="makeFlex" />
              </div>
              <div className="makeFlex spaceBetween">
                <div className="makeFlex">
                  <div
                    className="makeFlex align-items-center gap-x-10 airline-info-wrapper"
                    style={{ marginTop: "-7px" }}>
                    <span className="singleairline">
                      <span
                        className="arln-logo logo1"
                        style={{
                          backgroundImage:
                            'url("https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/AI.png?v=15")',
                        }}
                      />
                    </span>
                    <div>
                      <Typography
                        variant="h6"
                        className="boldFont blackText airlineName">
                        Alliance Air
                      </Typography>
                      <Typography variant="body2" className="fliCode">
                        9I 632
                      </Typography>
                    </div>
                  </div>
                  <div className="fontSize12 darkText clusterTimingOuter" />
                  <div className="timingOptionOuter">
                    <label
                      className="not-radio"
                      htmlFor="jrnyKey_0_1eae77ce-1c91-4ee3-b2c0-0eb0ed10576c"
                      style={{ cursor: "default" }}>
                      <div className="timingOption">
                        <div className="makeFlex">
                          <div
                            className="makeFlex fontSize12 flexOne gap-x-10"
                            style={{ paddingLeft: "100px", gap: "50px" }}>
                            <div className="flexOne timeInfoLeft">
                              <p className="appendBottom2 flightTimeInfo">
                                <span>19:35</span>
                              </p>
                              <p className="blackText">
                                <font color="#000000">Indore</font>
                              </p>
                            </div>
                            <div className="stop-info flexOne">
                              <p>
                                02<font color="#757575"> h </font>05
                                <font color="#757575"> m </font>
                              </p>
                              <div>
                                <div className="relative fliStopsSep">
                                  <p
                                    className="fliStopsSepLine"
                                    style={{
                                      borderTop: "3px solid rgb(81, 226, 194)",
                                    }}
                                  />
                                </div>
                                <p className="flightsLayoverInfo">Non stop</p>
                              </div>
                            </div>
                            <div className="flexOne timeInfoRight">
                              <p className="appendBottom2 flightTimeInfo">
                                <span>21:40</span>
                              </p>
                              <p className="blackText">
                                <font color="#000000">New Delhi</font>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </label>
                  </div>
                </div>
                <div className="priceSection priceLockPersuasionExists">
                  <div className="makeFlex top gap-x-10">
                    <div
                      className="textRight flexOne"
                      style={{ marginTop: "-5px" }}>
                      <div className="blackText fontSize18 blackFont white-space-no-wrap clusterViewPrice">
                        ₹ 5,528
                        <Typography
                          variant="body2"
                          className="fontSize12 darkText lightFont">
                          per adult
                        </Typography>
                      </div>
                    </div>
                    <Button className="ViewFareBtn text-uppercase clusterBtn">
                      <span className="appendRight8">View Prices</span>
                      <span className="customArrow arrowDown"></span>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="lpTriggerInfo makeFlex right">
                <span className="lockPriceTrigger">
                  <span
                    className="bgProperties icon12 appendRight5"
                    style={{
                      backgroundImage:
                        'url("https://imgak.mmtcdn.com/flights/assets/media/dt/listing/plc.png")',
                    }}></span>
                  <span className="fontSize12 boldFont blueText">
                    <LockIcon />
                    Lock this price for ₹ 343 <ArrowForwardIcon />
                  </span>
                  <span
                    className="bgProperties arrowRightStyle"
                    style={{
                      backgroundImage:
                        'url("https://imgak.mmtcdn.com/flights/assets/media/dt/listing/hb.png")',
                    }}></span>
                </span>
              </div>
              <p
                className="alertMsg appendBottom10 appendTop10"
                style={{
                  backgroundColor: "rgb(255, 237, 209)",
                  minHeight: 22,
                }}>
                Get Rs 200 off using MMTSUPER*
              </p>
              <div className="makeFlex spaceBtwCenter fontSize12 card-footer-v2">
                <div />
                <span className="linkText ctaLink viewFltDtlsCta">
                  View Flight Details
                </span>
              </div>
            </div>
          </Paper>
        </div>
        <div style={{ width: "75%", float: "right", paddingTop: "20px" }}>
          <Paper className="appendBottom15">
            <div className="listingCard appendBottom5">
              <div className="makeFlex hrtlCenter spaceBetween">
                <div className="makeFlex" />
              </div>
              <div className="makeFlex spaceBetween">
                <div className="makeFlex">
                  <div
                    className="makeFlex align-items-center gap-x-10 airline-info-wrapper"
                    style={{ marginTop: "-7px" }}>
                    <span className="singleairline">
                      <span
                        className="arln-logo logo1"
                        style={{
                          backgroundImage:
                            'url("https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/AI.png?v=15")',
                        }}
                      />
                    </span>
                    <div>
                      <Typography
                        variant="h6"
                        className="boldFont blackText airlineName">
                        Alliance Air
                      </Typography>
                      <Typography variant="body2" className="fliCode">
                        9I 632
                      </Typography>
                    </div>
                  </div>
                  <div className="fontSize12 darkText clusterTimingOuter" />
                  <div className="timingOptionOuter">
                    <label
                      className="not-radio"
                      htmlFor="jrnyKey_0_1eae77ce-1c91-4ee3-b2c0-0eb0ed10576c"
                      style={{ cursor: "default" }}>
                      <div className="timingOption">
                        <div className="makeFlex">
                          <div
                            className="makeFlex fontSize12 flexOne gap-x-10"
                            style={{ paddingLeft: "100px", gap: "50px" }}>
                            <div className="flexOne timeInfoLeft">
                              <p className="appendBottom2 flightTimeInfo">
                                <span>19:35</span>
                              </p>
                              <p className="blackText">
                                <font color="#000000">Indore</font>
                              </p>
                            </div>
                            <div className="stop-info flexOne">
                              <p>
                                02<font color="#757575"> h </font>05
                                <font color="#757575"> m </font>
                              </p>
                              <div>
                                <div className="relative fliStopsSep">
                                  <p
                                    className="fliStopsSepLine"
                                    style={{
                                      borderTop: "3px solid rgb(81, 226, 194)",
                                    }}
                                  />
                                </div>
                                <p className="flightsLayoverInfo">Non stop</p>
                              </div>
                            </div>
                            <div className="flexOne timeInfoRight">
                              <p className="appendBottom2 flightTimeInfo">
                                <span>21:40</span>
                              </p>
                              <p className="blackText">
                                <font color="#000000">New Delhi</font>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </label>
                  </div>
                </div>
                <div className="priceSection priceLockPersuasionExists">
                  <div className="makeFlex top gap-x-10">
                    <div
                      className="textRight flexOne"
                      style={{ marginTop: "-5px" }}>
                      <div className="blackText fontSize18 blackFont white-space-no-wrap clusterViewPrice">
                        ₹ 5,528
                        <Typography
                          variant="body2"
                          className="fontSize12 darkText lightFont">
                          per adult
                        </Typography>
                      </div>
                    </div>
                    <Button className="ViewFareBtn text-uppercase clusterBtn">
                      <span className="appendRight8">View Prices</span>
                      <span className="customArrow arrowDown"></span>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="lpTriggerInfo makeFlex right">
                <span className="lockPriceTrigger">
                  <span
                    className="bgProperties icon12 appendRight5"
                    style={{
                      backgroundImage:
                        'url("https://imgak.mmtcdn.com/flights/assets/media/dt/listing/plc.png")',
                    }}></span>
                  <span className="fontSize12 boldFont blueText">
                    <LockIcon />
                    Lock this price for ₹ 343 <ArrowForwardIcon />
                  </span>
                  <span
                    className="bgProperties arrowRightStyle"
                    style={{
                      backgroundImage:
                        'url("https://imgak.mmtcdn.com/flights/assets/media/dt/listing/hb.png")',
                    }}></span>
                </span>
              </div>
              <p
                className="alertMsg appendBottom10 appendTop10"
                style={{
                  backgroundColor: "rgb(255, 237, 209)",
                  minHeight: 22,
                }}>
                Get Rs 200 off using MMTSUPER*
              </p>
              <div className="makeFlex spaceBtwCenter fontSize12 card-footer-v2">
                <div />
                <span className="linkText ctaLink viewFltDtlsCta">
                  View Flight Details
                </span>
              </div>
            </div>
          </Paper>
        </div>
        <div style={{ width: "75%", float: "right", paddingTop: "20px" }}>
          <Paper className="appendBottom15">
            <div className="listingCard appendBottom5">
              <div className="makeFlex hrtlCenter spaceBetween">
                <div className="makeFlex" />
              </div>
              <div className="makeFlex spaceBetween">
                <div className="makeFlex">
                  <div
                    className="makeFlex align-items-center gap-x-10 airline-info-wrapper"
                    style={{ marginTop: "-7px" }}>
                    <span className="singleairline">
                      <span
                        className="arln-logo logo1"
                        style={{
                          backgroundImage:
                            'url("https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/AI.png?v=15")',
                        }}
                      />
                    </span>
                    <div>
                      <Typography
                        variant="h6"
                        className="boldFont blackText airlineName">
                        Alliance Air
                      </Typography>
                      <Typography variant="body2" className="fliCode">
                        9I 632
                      </Typography>
                    </div>
                  </div>
                  <div className="fontSize12 darkText clusterTimingOuter" />
                  <div className="timingOptionOuter">
                    <label
                      className="not-radio"
                      htmlFor="jrnyKey_0_1eae77ce-1c91-4ee3-b2c0-0eb0ed10576c"
                      style={{ cursor: "default" }}>
                      <div className="timingOption">
                        <div className="makeFlex">
                          <div
                            className="makeFlex fontSize12 flexOne gap-x-10"
                            style={{ paddingLeft: "100px", gap: "50px" }}>
                            <div className="flexOne timeInfoLeft">
                              <p className="appendBottom2 flightTimeInfo">
                                <span>19:35</span>
                              </p>
                              <p className="blackText">
                                <font color="#000000">Indore</font>
                              </p>
                            </div>
                            <div className="stop-info flexOne">
                              <p>
                                02<font color="#757575"> h </font>05
                                <font color="#757575"> m </font>
                              </p>
                              <div>
                                <div className="relative fliStopsSep">
                                  <p
                                    className="fliStopsSepLine"
                                    style={{
                                      borderTop: "3px solid rgb(81, 226, 194)",
                                    }}
                                  />
                                </div>
                                <p className="flightsLayoverInfo">Non stop</p>
                              </div>
                            </div>
                            <div className="flexOne timeInfoRight">
                              <p className="appendBottom2 flightTimeInfo">
                                <span>21:40</span>
                              </p>
                              <p className="blackText">
                                <font color="#000000">New Delhi</font>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </label>
                  </div>
                </div>
                <div className="priceSection priceLockPersuasionExists">
                  <div className="makeFlex top gap-x-10">
                    <div
                      className="textRight flexOne"
                      style={{ marginTop: "-5px" }}>
                      <div className="blackText fontSize18 blackFont white-space-no-wrap clusterViewPrice">
                        ₹ 5,528
                        <Typography
                          variant="body2"
                          className="fontSize12 darkText lightFont">
                          per adult
                        </Typography>
                      </div>
                    </div>
                    <Button className="ViewFareBtn text-uppercase clusterBtn">
                      <span className="appendRight8">View Prices</span>
                      <span className="customArrow arrowDown"></span>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="lpTriggerInfo makeFlex right">
                <span className="lockPriceTrigger">
                  <span
                    className="bgProperties icon12 appendRight5"
                    style={{
                      backgroundImage:
                        'url("https://imgak.mmtcdn.com/flights/assets/media/dt/listing/plc.png")',
                    }}></span>
                  <span className="fontSize12 boldFont blueText">
                    <LockIcon />
                    Lock this price for ₹ 343 <ArrowForwardIcon />
                  </span>
                  <span
                    className="bgProperties arrowRightStyle"
                    style={{
                      backgroundImage:
                        'url("https://imgak.mmtcdn.com/flights/assets/media/dt/listing/hb.png")',
                    }}></span>
                </span>
              </div>
              <p
                className="alertMsg appendBottom10 appendTop10"
                style={{
                  backgroundColor: "rgb(255, 237, 209)",
                  minHeight: 22,
                }}>
                Get Rs 200 off using MMTSUPER*
              </p>
              <div className="makeFlex spaceBtwCenter fontSize12 card-footer-v2">
                <div />
                <span className="linkText ctaLink viewFltDtlsCta">
                  View Flight Details
                </span>
              </div>
            </div>
          </Paper>
        </div>
      </div>
    </>
  );
}

export default FlightFilters;
