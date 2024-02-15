import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import "./slider.css";
import { Stack } from "@mui/material";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const images = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath:
      "https://crypto-admin-templates.multipurposethemes.com/sass/bs5/images/front-end-img/banners/graphic_carousel_referrals.png",
    description: `Want Bitcoin? You got it.`,
    para: "Instantly buy or sell Bitcoin with the click of a button.",
    button: "Get started",
  },
  {
    label: "Bird",
    imgPath:
      "https://crypto-admin-templates.multipurposethemes.com/sass/bs5/images/front-end-img/banners/graphic_carousel_instant.png",
    description: `The more the merrier. Invite your friends and earn crypto.`,
    para: "",
    button: "Get started",
  },
  {
    label: "Bali, Indonesia",
    imgPath:
      "https://crypto-admin-templates.multipurposethemes.com/sass/bs5/images/front-end-img/banners/graphic_carousel_generic.png",
    description: `250+ of the world’s most popular cryptocurrency markets.`,
    para: "Your access to the top coin markets. Capitalize on trends and trade with confidence through our expansive marketplace listings.",
  },
];

function Slider() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className="slider__container">
      <Box sx={{ maxWidth: "80vw", flexGrow: 1 }} className="slider__box">
        {/* <Paper
          square
          elevation={0}
          sx={{
            display: "flex",
            alignItems: "center",
            height: 50,
            pl: 2,
            bgcolor: "background.default",
          }}
        >
          <Typography>{images[activeStep].label}</Typography>
        </Paper> */}
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <div
                  style={{ display: "flex", alignItems: "center", gap: "20px" }}
                >
                  <Box
                    sx={{
                      height: "",
                      display: "block",
                      maxWidth: "40vw",
                      overflow: "hidden",
                      width: "50%",
                    }}
                  >
                    <div>
                      <h1> {step.description}</h1>
                      <p> {step.para}</p>
                      {step.button ? (
                        <Stack spacing={1} direction="row">
                          <Button variant="outlined">{step.button}</Button>
                        </Stack>
                      ) : (
                        ""
                      )}
                    </div>
                  </Box>
                  <Box
                    component="img"
                    sx={{
                      height: "40vh",
                      display: "block",
                      maxWidth: "40vw",
                      overflow: "hidden",
                      width: "35%",
                    }}
                    src={step.imgPath}
                    alt={step.label}
                  />
                </div>
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>

        {/* navigation Buttons */}

        {/* <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        /> */}
      </Box>
    </div>
  );
}

export default Slider;
