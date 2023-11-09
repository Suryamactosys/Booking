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
  Box,
  Dialog,
} from "@mui/material";
// import FlightIcon from "@mui/icons-material/Flight";
// import HotelIcon from "@mui/icons-material/Hotel";
// import TrainIcon from "@mui/icons-material/Train";
import GoogleButton from "react-google-button";
import { FcGoogle } from "react-icons/fc";

const Mybiz = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  // const [activeSlide, setActiveSlide] = useState(0);

  // const slides = [
  //   {
  //     title: "Lock Flight Prices & Pay Later",
  //     icon: <FlightIcon className="loginPersuasionSlider whiteFlight" />,
  //   },
  //   {
  //     title: "Book Hotels @ ₹0",
  //     icon: <HotelIcon className="loginPersuasionSlider whiteHotel" />,
  //   },
  //   {
  //     title: "Get 3X refund, if your waitlisted train doesn't get confirmed",
  //     icon: <TrainIcon className="loginPersuasionSlider whiteTrain" />,
  //   },
  // ];

  // const handlePrevSlide = () => {
  //   setActiveSlide((prevSlide) =>
  //     prevSlide === 0 ? slides.length - 1 : prevSlide - 1
  //   );
  // };

  // const handleNextSlide = () => {
  //   setActiveSlide((prevSlide) =>
  //     prevSlide === slides.length - 1 ? 0 : prevSlide + 1
  //   );
  // };

  // const [data, setData] = useState();

  // const handelSubmit = (e) => {
  //   e.prevent.default();
  //   console.log(data);
  // };

  return (
    <>
      <Button onClick={handleOpen}>Open</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="md"
        sx={{ paddingTop: "0px" }}>
        {/* <Button
          onClick={handleClose}
          sx={{
            backgroundColor: "blue",
            color: "#fff",
            textAlign: "right",
          }}>
          X
        </Button> */}
        <Box>
          <Grid
            container
            spacing={2}
            style={{ paddingTop: "0px", color: "#fff" }}>
            <Grid item xs={6} style={{ padding: "10px" }}>
              <Paper
                elevation={0}
                style={{ borderRadius: "8px", height: "500px" }}>
                <Box>
                  <img
                    src="https://imgak.mmtcdn.com/pwa_v3/pwa_header_assets/loginPersuassionValley.jpg"
                    alt="img1"
                    style={{
                      width: "100%",
                      borderRadius: "8px",
                      height: "530px",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              </Paper>
            </Grid>
            <Grid
              item
              xs={6}
              style={{ paddingTop: "50px", paddingRight: "15px" }}>
              <Paper sx={{ padding: "20px" }}>
                <Tabs
                  value={activeTab}
                  onChange={handleTabChange}
                  centered
                  style={{ marginTop: "16px" }}>
                  <Tab
                    className={activeTab === 0 ? "active" : ""}
                    label="Personal Account"
                  />
                  <Tab
                    className={activeTab === 1 ? "active" : ""}
                    label="MyBiz Account"
                  />
                </Tabs>
                {activeTab === 0 && (
                  <Box>
                    <Typography variant="h6" style={{ paddingTop: "10px" }}>
                      Email or Phone Number
                    </Typography>
                    <form>
                      <TextField
                        fullWidth
                        label="Email or Mobile Number"
                        variant="outlined"
                        margin="normal"
                      />
                      <Box style={{ textAlign: "center", marginTop: "16px" }}>
                        <Button
                          variant="contained"
                          color="primary"
                          fullWidth
                          onClick={handleClose}>
                          Continue
                        </Button>
                      </Box>
                    </form>
                    <Typography
                      style={{ textAlign: "center", marginTop: "16px" }}>
                      Or Login/Signup With
                    </Typography>
                    <Box style={{ textAlign: "center", marginTop: "16px" }}>
                      {/* <GoogleButton /> */}
                      <FcGoogle />
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
                    <Typography
                      style={{ textAlign: "center", marginTop: "16px" }}>
                      OR USE YOUR BUSINESS ACCOUNT WITH
                    </Typography>
                    <Box style={{ textAlign: "center", marginTop: "16px" }}>
                      <GoogleButton />
                    </Box>
                  </Box>
                )}
                <Grid
                  container
                  justify="center"
                  style={{ marginTop: "30px", fontSize: "12px" }}>
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
            </Grid>
          </Grid>
        </Box>
      </Dialog>
    </>
  );
};

export default Mybiz;
