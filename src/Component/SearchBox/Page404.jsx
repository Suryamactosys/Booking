import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
// import robot from "../../assets/error.png";

const Page404 = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        paddingTop: "100px",
        backgroundImage: 'url("../../assets/error.png")',
      }}>
      <Typography>This page not found</Typography>
      <Link to="/"> Go to home page</Link>
    </Box>
  );
};

export default Page404;
