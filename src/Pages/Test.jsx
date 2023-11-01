import { Box, Button } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Test = () => {
  const notify = () => toast.success("Login successfully");
  return (
    <Box sx={{ textAlign: "center", paddingTop: "50px" }}>
      <h1>Login page</h1>
      <Button
        onClick={notify}
        sx={{
          width: "100px",
          backgroundColor: "green",
          color: "#fff",
          marginTop: "20px",
        }}>
        Login
      </Button>
      <ToastContainer position="top-center" />
    </Box>
  );
};

export default Test;
