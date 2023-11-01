import logo from "../../assets/Header/logo.png";
import { Link, NavLink } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import { Flag } from "@mui/icons-material";
import discount from "../../assets/Header/discount_68d1265618.svg";
import mytrip from "../../assets/Header/mytrip.png";
import bagtrip from "../../assets/Header/bagtrip.png";
// import { useState } from "react";

const Header = () => {
  // const [open, setOpen] = useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  return (
    <Box
      sx={{
        paddingTop: "10px",
        backgroundColor: "#061424",
        color: "white",
      }}>
      <Box sx={{ display: "flex" }}>
        <Link to="/">
          <img
            src={logo}
            alt="MMT's LOGO"
            height={40}
            style={{ paddingLeft: "70px" }}
          />
        </Link>
        <ul style={{ display: "flex", paddingLeft: "135px" }}>
          <li style={{ display: "flex" }}>
            <img src={discount} alt="" height={35} />
            <Box>
              <Typography>
                &nbsp;&nbsp;&nbsp;
                <span>Super Offers</span>
              </Typography>
              <Typography style={{ fontSize: "12px" }}>
                &nbsp;&nbsp;&nbsp;&nbsp;Explore great deals &amp; offers
              </Typography>
            </Box>
          </li>
          <li style={{ display: "flex" }}>
            <img
              src={mytrip}
              alt=""
              height={30}
              style={{ paddingLeft: "8px" }}
            />
            <Box>
              <Typography>
                <span>&nbsp;&nbsp;&nbsp;Introducing myBiz</span>
              </Typography>
              <Typography style={{ fontSize: "12px" }}>
                &nbsp;&nbsp;&nbsp;&nbsp;Business Travel Solution
              </Typography>
            </Box>
          </li>
          <li style={{ display: "flex" }}>
            <img
              src={bagtrip}
              alt=""
              height={30}
              style={{ paddingLeft: "8px" }}
            />
            <Box>
              <Typography>
                <span>&nbsp;&nbsp;&nbsp;My Trips</span>
              </Typography>
              <Typography style={{ fontSize: "12px" }}>
                &nbsp;&nbsp;&nbsp;&nbsp;Manage your bookings
              </Typography>
            </Box>
          </li>
          <li>
            <Box>
              &nbsp;&nbsp;&nbsp;
              <NavLink to="/mybiz">
                <Button
                  sx={{
                    background: "linear-gradient(93deg, #53b2fe, #176EF6)",
                    color: "#fff",
                    padding: "0px",
                    width: "220px",
                  }}>
                  <Typography sx={{ fontSize: "12px", padding: "10px" }}>
                    Login or Create Account
                  </Typography>
                </Button>
              </NavLink>
            </Box>
          </li>
          <li>
            <Box>
              <Button
                sx={{
                  background: "#2B3745",
                  color: "#fff",
                  fontSize: "10px",
                  padding: "7px",
                  width: "150px",
                }}>
                <Flag />
                <span>IN</span> |<span> ENG</span> |<span> INR</span>
              </Button>
            </Box>
          </li>
        </ul>
      </Box>
    </Box>
  );
};

export default Header;
