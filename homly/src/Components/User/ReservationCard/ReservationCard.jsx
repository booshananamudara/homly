import React from "react";
import {
  Box,
  ThemeProvider,
  Grid,
  Stack,
  Typography,
  Button,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import theme from "../../../HomlyTheme";

export default function ReservationCard(props) {
  const buttons = () => {
    if (props.HHreservation === "Ongoing") {
      if (props.HHpayment) {
        return (
          <Stack direction="row" sx={{ marginTop: { xs: "10px", sm: "0" } }}>
            {/* <Button variant="contained" color="success" endIcon="" sx={{width:'108px'}}> */}
            <Stack
              direction="row"
              sx={{
                width: "108px",
                bgcolor: "success.light",
                padding: "6px 16px",
                borderRadius: "4px",
                fontSize: "0.875rem",
                justifyContent: "Center",
                alignItems: "center",
              }}
            >
              <Typography sx={{ fontWeight: "500", color: "white" }}>
                PAID
              </Typography>
              <CheckCircleIcon sx={{ color: "white", marginLeft: "10px" }} />
            </Stack>
            <Button variant="outlined" sx={{ marginLeft: "15px" }}>
              Cancel
            </Button>
          </Stack>
        );
      } else {
        return (
          <Stack direction="row" sx={{ marginTop: { xs: "10px", sm: "0" } }}>
            <Button variant="contained" color="error" sx={{ width: "108px" }}>
              Checkout
            </Button>
            <Button variant="outlined" sx={{ marginLeft: "15px" }}>
              Cancel
            </Button>
          </Stack>
        );
      }
    } else {
      return (
        <Stack direction="row" sx={{ marginTop: { xs: "10px", sm: "0" } }}>
          <Button variant="contained">Review</Button>
        </Stack>
      );
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        sx={{
          maxWidth: "700px",
          maxHeight: { xs: "auto", sm: "300px" },
          bgcolor: "#F5F5F5",
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <Grid item xs={12} sm={3} sx={{ alignItems: "center" }}>
          <Box
            component="img"
            src="https://amazingarchitecture.com/storage/files/1742/architecture-projects/damith-premathilake-architects/holiday-home/holiday-home-nuwara-eliya-damith-premathilake-architects-1.jpg"
            alt=""
            sx={{ height: "100%", width: "100%", borderRadius: "10px" }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Stack direction="column" sx={{ marginLeft: { sm: "10px" } }}>
            <Typography sx={{ fontWeight: "bold", fontSize: "1.3rem" }}>
              {props.HHName}
            </Typography>
            <Typography sx={{ fontWeight: "light", fontSize: "0.8rem" }}>
              {props.HHAddress}
            </Typography>
            <Grid container sx={{ alignItems: "flex-end",marginTop:{xs:'5px',sm:'0'} }}>
              <Grid item xs={7} sm={5}>
                <Typography sx={{ fontSize: "0.9rem" }}>
                  Reserved Date
                </Typography>
              </Grid>
              <Grid item>
                <Typography>{props.HHReservedDate}</Typography>
              </Grid>
            </Grid>
            <Grid container sx={{ alignItems: "flex-end" }}>
              <Grid item xs={7} sm={5}>
                <Typography sx={{ fontSize: "0.9rem" }}>Check in</Typography>
              </Grid>
              <Grid item>
                <Typography>{props.HHCheckIn}</Typography>
              </Grid>
            </Grid>
            <Grid container sx={{ alignItems: "flex-end" }}>
              <Grid item xs={7} sm={5}>
                <Typography sx={{ fontSize: "0.9rem" }}>Check out</Typography>
              </Grid>
              <Grid item>
                <Typography>{props.HHCheckOut}</Typography>
              </Grid>
            </Grid>
            <Grid container sx={{ alignItems: "flex-end" }}>
              <Grid item xs={7} sm={5}>
                <Typography sx={{ fontSize: "0.9rem" }}>Total Cost</Typography>
              </Grid>
              <Grid item>
                <Stack
                  direction="row"
                  sx={{ alignItems: "baseline", color: "primary.main" }}
                >
                  <Typography sx={{ fontSize: "0.8rem", fomtWeight: "medium" }}>
                    LKR
                  </Typography>
                  <Typography sx={{ fontSize: "1.1rem", fontWeight: "bold" }}>
                    {props.HHPrice}
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={3} sx={{ justifyContent: "right" }}>
          <Stack
            direction="column"
            sx={{ justifyContent: "space-between", height: "100%" }}
          >
            <Stack direction="column">
              <Grid
                item
                container
                sx={{ justifyContent: { sm: "space-between" },marginTop:'5px' }}
              >
                <Grid item xs={6} sm={8}>
                  <Typography>No of Adults</Typography>
                </Grid>
                <Grid item>
                  <Box
                    sx={{
                      bgcolor: "text.primary",
                      width: "25px",
                      height: "25px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "5px",
                      color: "white",
                    }}
                  >
                    <Typography>{props.HHAdults}</Typography>
                  </Box>
                </Grid>
              </Grid>
              <Grid
                item
                container
                sx={{ justifyContent: { sm: "space-between" },marginTop:'5px' }}
              >
                <Grid item xs={6} sm={8}>
                  <Typography>No of Childlen</Typography>
                </Grid>
                <Grid item>
                  <Box
                    sx={{
                      bgcolor: "text.primary",
                      width: "25px",
                      height: "25px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "5px",
                      color: "white",
                    }}
                  >
                    <Typography>{props.HHRooms}</Typography>
                  </Box>
                </Grid>
              </Grid>
              <Grid
                item
                container
                sx={{ justifyContent: { sm: "space-between" },marginTop:'5px' }}
              >
                <Grid item xs={6} sm={8}>
                  <Typography>No of Rooms</Typography>
                </Grid>
                <Grid item>
                  <Box
                    sx={{
                      bgcolor: "text.primary",
                      width: "25px",
                      height: "25px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "5px",
                      color: "white",
                    }}
                  >
                    <Typography>{props.HHRooms}</Typography>
                  </Box>
                </Grid>
              </Grid>
            </Stack>
            <Box sx={{ display: "flex", justifyContent: "end" }}>
              {buttons(props)}
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
