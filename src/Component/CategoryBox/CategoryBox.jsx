import FlightIcon from "@mui/icons-material/Flight";
import HotelIcon from "@mui/icons-material/Hotel";
import HomeIcon from "@mui/icons-material/Home";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import TrainIcon from "@mui/icons-material/Train";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";
import EuroIcon from "@mui/icons-material/Euro";
import { Box, Container, Grid } from "@mui/material";
import IconBox from "./IconBox";

const CategoryBox = () => {
  return (
    <Box display={"flex"} justifyContent={"center"}>
      <Box
        display={"flex"}
        alignItems={"flex-end"}
        // maxWidth={"lg"}
        // width={920}
        height={90}
        bgcolor={"#fff"}
        borderRadius={2}
        boxShadow={5}>
        <Container maxWidth="lg">
          <Grid container columnSpacing={6}>
            <Grid item xs={"auto"}>
              <IconBox selected label={"Flights"} Icon={FlightIcon} />
            </Grid>
            <Grid item xs={"auto"}>
              <IconBox label={"Hotels"} Icon={HotelIcon} />
              {/* <img src={Hotels} alt="" height={30} width={50} /> */}
            </Grid>
            <Grid item xs={"auto"}>
              <IconBox label={"Homestay"} Icon={HomeIcon} />
            </Grid>
            <Grid item xs={"auto"}>
              <IconBox label={"Holiday"} Icon={BeachAccessIcon} />
            </Grid>
            <Grid item xs={"auto"}>
              <IconBox label={"Trains"} Icon={TrainIcon} />
            </Grid>
            <Grid item xs={"auto"}>
              <IconBox label={"Buses"} Icon={DirectionsBusIcon} />
            </Grid>
            <Grid item xs={"auto"}>
              <IconBox label={"Cabs"} Icon={LocalTaxiIcon} />
            </Grid>
            <Grid item xs={"auto"}>
              <IconBox label={"Forex Card"} Icon={EuroIcon} />
            </Grid>
            <Grid item xs={"auto"}>
              <IconBox label={"Travel"} Icon={TrainIcon} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default CategoryBox;
