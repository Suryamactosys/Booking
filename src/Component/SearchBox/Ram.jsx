import { useState } from "react";
import {
  Box,
  Popover,
  Stack,
  Typography,
  FormControl,
  MenuItem,
  Select,
} from "@mui/material";
import { travelerOptions, classOptions } from "../../Data";

function Ram({ label }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedTraveler, setSelectedTraveler] = useState("");
  const [selectedClass, setSelectedClass] = useState("");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleTravelerChange = (event) => {
    setSelectedTraveler(event.target.value);
  };

  const handleClassChange = (event) => {
    setSelectedClass(event.target.value);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <Typography>Travellers & Class</Typography>
      <Box
        sx={{
          cursor: "pointer",
          width: "100%",
          "&:hover": {
            bgcolor: "#fff",
          },
        }}
        onClick={handleClick}>
        <Stack sx={{ padding: "0px" }}>
          <Typography>{label}</Typography>
          <Typography>
            <h2>{selectedTraveler} Traveler</h2>
          </Typography>
          <Typography>{selectedClass}</Typography>
        </Stack>
      </Box>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "center",
          horizontal: "center",
        }}>
        <Typography>CHOOSE TRAVEL</Typography>
        <FormControl>
          <Select
            labelId="travellers-label"
            id="travellers"
            value={selectedTraveler}
            sx={{ width: "180px" }}
            onChange={handleTravelerChange}
            className="form-select font30 latoBlack">
            {travelerOptions.map((option) => (
              <MenuItem key={option} value={option}>
                {option} Travellers{option > 1 ? "" : ""}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <br />
        <Typography>CHOOSE TRAVEL CLASS</Typography>
        <FormControl>
          <Select
            labelId="class-label"
            id="class"
            value={selectedClass}
            sx={{ width: "200px" }}
            onChange={handleClassChange}
            className="form-select">
            {classOptions.map((option) => (
              <MenuItem key={option} value={option}>
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Popover>
    </>
  );
}

export default Ram;
