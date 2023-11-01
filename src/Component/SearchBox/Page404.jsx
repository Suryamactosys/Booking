import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import robot from "../../assets/robot.png";

const Page404 = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        paddingTop: "100px",
        // backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(${robot})`,
        height: "560px",
      }}>
      <Typography variant="h4">This page not found</Typography>
      <Link to="/">
        {" "}
        <Typography variant="h6">Go to home page</Typography>
      </Link>
    </Box>
  );
};

export default Page404;
