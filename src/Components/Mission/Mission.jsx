import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { CardActionArea, CardContent, Stack, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import "./mission.css";
import { missionData } from "./missionData";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const Mission = () => {
  return (
    <main>
      <div className="theme__dark__blue mission__container">
        <div>
          <Typography
            variant="h4"
            padding={5}
            margin={"auto"}
            className="text__center w__30"
          >
            Our mission is new technology
            <span className="text__aqua"> trading with Bitcoin</span>
          </Typography>
        </div>
        <div className="d__flex W__80 m__auto">
          {missionData.map((item, index) => {
            return (
              <div className="flex__child" key={index}>
                <h1>{item.heading}</h1>
                <p>{item.details}</p>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Mission;
