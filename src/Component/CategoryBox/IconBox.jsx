import { Box, Stack, Typography } from "@mui/material";

function IconBox({ label, Icon, selected }) {
  return (
    <Box borderBottom={selected ? "4px solid #008cff" : "none"}>
      <Stack rowGap={1}>
        <Box display={"flex"} justifyContent={"center"}>
          <Icon
            fontSize="large"
            sx={{
              color: selected ? "#008cff" : "inherit",
            }}
          />
        </Box>
        <Typography
          sx={{
            color: selected ? "#008cff" : "inherit",
          }}>
          {label}
        </Typography>
      </Stack>
    </Box>
  );
}

export default IconBox;
