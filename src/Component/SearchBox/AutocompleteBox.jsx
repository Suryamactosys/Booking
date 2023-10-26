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

function AutocompleteBox({ label }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedCities, setSelectedCities] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCitiesChange = (event, newValue) => {
    console.log("new value", newValue);
    setSelectedCities(newValue);
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
        <Stack sx={{ padding: "10px" }}>
          <Typography>{label}</Typography>
          <Typography>
            <h2>{selectedCities?.value}</h2>
          </Typography>
          <Typography>{selectedCities?.label.slice(0, 30)}</Typography>
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
          value={selectedCities}
          onChange={handleCitiesChange}
          sx={{ width: "250px" }}
          renderInput={(params) => <TextField {...params} />}
        />
      </Popover>
    </>
  );
}

export default AutocompleteBox;
