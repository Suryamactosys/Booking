import {
  Autocomplete,
  Box,
  Popover,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { cityNames } from "../../Data";

function Demo({ label }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCityChange = (event, newValue) => {
    console.log("new value", newValue);
    setSelectedCity(newValue);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <>
      <Box
        sx={{
          cursor: "pointer",
          width: "100%",
          "&:hover": {
            bgcolor: "#fff",
          },
        }}
        onClick={handleClick}>
        <Stack sx={{ padding: "10px 0px 0px 12px" }}>
          <Typography>{label}</Typography>
          <Typography>
            <h2>{selectedCity?.value}</h2>
          </Typography>
          <Typography>{selectedCity?.label.slice(0, 30)}</Typography>
        </Stack>
      </Box>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}>
        <Autocomplete
          data-cy="travellers"
          id="travellers"
          options={cityNames}
          value={selectedCity}
          sx={{ width: "250px" }}
          onChange={handleCityChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </Popover>
    </>
  );
}

export default Demo;
