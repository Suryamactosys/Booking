// import { Box, Container } from '@mui/material'
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import CategoryBox from "../Component/CategoryBox/CategoryBox";
import SearchBox from "../Component/SearchBox/SearchBox";

function Homepage() {
  return (
    <Box>
      <Box
        sx={{
          minHeight: 520,
          background:
            "linear-gradient(180deg, rgba(5,19,34,1) 0%, rgba(21,69,124,1) 100%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Container maxWidth="xl" sx={{ position: "relative" }}>
          {/* <Box position={"relative"} width={"100%"}>*/}
          <Box
            position={"absolute"}
            sx={{
              top: -60,
              width: "98%",
            }}>
            <CategoryBox />
          </Box>
          <Box sx={{ paddingLeft: "45px" }}>
            <SearchBox />
          </Box>
          {/* </Box> */}
        </Container>
      </Box>
    </Box>
  );
}

export default Homepage;
