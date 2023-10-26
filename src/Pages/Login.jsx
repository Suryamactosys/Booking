import { useState } from "react";
import {
  Button,
  TextField,
  Typography,
  Grid,
  Paper,
  Link,
  Tab,
  Tabs,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Box,
} from "@mui/material";
import FlightIcon from "@mui/icons-material/Flight";
import HotelIcon from "@mui/icons-material/Hotel";
import TrainIcon from "@mui/icons-material/Train";
import GoogleButton from "react-google-button";

const Login = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      title: "Lock Flight Prices & Pay Later",
      icon: <FlightIcon className="loginPersuasionSlider whiteFlight" />,
    },
    {
      title: "Book Hotels @ ₹0",
      icon: <HotelIcon className="loginPersuasionSlider whiteHotel" />,
    },
    {
      title: "Get 3X refund, if your waitlisted train doesn't get confirmed",
      icon: <TrainIcon className="loginPersuasionSlider whiteTrain" />,
    },
  ];

  const handlePrevSlide = () => {
    setActiveSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  const handleNextSlide = () => {
    setActiveSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <Box style={{ paddingBottom: "50px", backgroundColor: "#0B2845" }}>
      <Box style={{ backgroundColor: "#0B2845" }}>
        <Box
          style={{
            display: "flex",
            padding: "50px 0px 0px 260px",
          }}>
          <Paper style={{ width: "35%", borderRadius: "8px", height: "530px" }}>
            {/* <div className="loginSliderCompWrapper hideSection">
              <div className="loginSliderComp-loadingState">
                Loading state content
              </div>
            </div> */}
            <Box>
              <Box>
                <Box>
                  <picture>
                    <source
                      srcSet="https://imgak.mmtcdn.com/pwa_v3/pwa_header_assets/loginPersuassionValley.webp"
                      type="image/webp"
                    />
                    <source
                      srcSet="https://imgak.mmtcdn.com/pwa_v3/pwa_header_assets/loginPersuassionValley.jpg"
                      type="image/jpeg"
                    />
                    <img
                      src="https://imgak.mmtcdn.com/pwa_v3/pwa_header_assets/loginPersuassionValley.jpg"
                      alt="img1"
                      style={{
                        // height: "520px",
                        width: "380px",
                        borderRadius: "8px",
                      }}
                    />
                  </picture>
                </Box>
                {/* <div className="sliderItemContent">
                  <div className="sliderItemContent-headerPart">
                    <Typography variant="h6">Sign up/Login now to</Typography>
                  </div>
                  <List>
                    <ListItem>
                      <ListItemIcon>
                        <FlightIcon className="loginPersuasionSlider whiteFlight" />
                      </ListItemIcon>
                      <ListItemText
                        primary="Lock Flight Prices & Pay Later"
                        className="benefitTitle"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <HotelIcon className="loginPersuasionSlider whiteHotel" />
                      </ListItemIcon>
                      <ListItemText
                        primary="Book Hotels @ ₹0"
                        className="benefitTitle"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <TrainIcon className="loginPersuasionSlider whiteTrain" />
                      </ListItemIcon>
                      <ListItemText
                        primary="Get 3X refund, if your waitlisted train doesn’t get confirmed"
                        className="benefitTitle"
                      />
                    </ListItem>
                  </List>
                </div> */}
              </Box>
              {/* <Box></Box> */}
            </Box>
          </Paper>
          <Paper
            style={{
              padding: "16px",
              height: "550px",
              width: "45%",
              borderRadius: "8px",
            }}>
            <Tabs
              value={activeTab}
              onChange={handleTabChange}
              centered
              style={{ marginTop: "16px" }}>
              <Tab
                className={activeTab === 0 ? "active" : ""}
                label="Personal Account"
                data-acctype="personal"
                data-cy="personalLogin"
              />
              <Tab
                className={activeTab === 1 ? "active" : ""}
                label="MyBiz Account"
                data-acctype="myBiz"
              />
            </Tabs>
            {activeTab === 0 && (
              <Box>
                <Typography variant="h6" style={{ paddingTop: "10px" }}>
                  Email or Phone Number
                  {/* <Button
                    style={{ position: "absolute", right: "8px", top: "8px" }}>
                    &times;
                  </Button> */}
                </Typography>
                <form>
                  <TextField
                    fullWidth
                    label="Email or Mobile Number"
                    variant="outlined"
                    margin="normal"
                  />
                  <Box style={{ textAlign: "center", marginTop: "16px" }}>
                    <Button variant="contained" color="primary" fullWidth>
                      Continue
                    </Button>
                  </Box>
                </form>
                <Typography style={{ textAlign: "center", marginTop: "16px" }}>
                  Or Login/Signup With
                </Typography>
                <Box style={{ textAlign: "center", marginTop: "16px" }}>
                  <GoogleButton />
                </Box>
              </Box>
            )}
            {activeTab === 1 && (
              <Box>
                <Typography variant="h6">Login | Sign Up</Typography>
                <Typography style={{ paddingTop: "10px" }}>
                  Work Email
                </Typography>
                <form>
                  <TextField
                    fullWidth
                    label="Enter your work email id"
                    variant="outlined"
                    margin="normal"
                  />
                  <Box style={{ textAlign: "center", marginTop: "16px" }}>
                    <Button variant="contained" color="primary" fullWidth>
                      Continue
                    </Button>
                  </Box>
                </form>
                <Typography style={{ textAlign: "center", marginTop: "16px" }}>
                  OR USE YOUR BUSSINESS ACCOUNT WITH
                </Typography>
                <Box style={{ textAlign: "center", marginTop: "16px" }}>
                  <GoogleButton />
                </Box>
              </Box>
            )}
            <Grid
              container
              justify="center"
              style={{ marginTop: "80px", fontSize: "12px" }}>
              <Typography>
                By proceeding, you agree to MakeMyTrips{" "}
                <Link href="#" variant="body2">
                  Privacy Policy
                </Link>
                ,{" "}
                <Link href="#" variant="body2">
                  User Agreement
                </Link>
                &nbsp;and&nbsp;
                <Link href="#" variant="body2">
                  T&Cs
                </Link>
              </Typography>
            </Grid>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
