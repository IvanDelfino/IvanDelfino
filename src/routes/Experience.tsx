import { Container, Grid, Paper, Stack } from "@mui/material";
import React from "react";
import { ExpCard } from "../components/ExpCard";

const Experience = () => {
  return (
    <>
      <Container>
        <div className="centrado">
          <Stack spacing={3}>
            <ExpCard
              title={"SECRETARIA DE DESARROLLO SOCIAL"}
              description={
                "Team Development of a web page for the diffusion of Centros Contigo and management of inputs and outputs of product tickets as well as connection to own APIs using the MERN stack in conjunction with Git"
              }
              date={"January 2021-May 2021"}
              rol={"Intern"}
            />
            <ExpCard
              title={"Universidad politecnica de Aguascalientes"}
              description={
                "Implementation of a desktop software application for the management and control of student access to the SAC classroom through bar reader as well as generation of reports in excel according to the group, teacher or student's career using Java"
              }
              date={"January 2021-May 2021"}
              rol={"Intern"}
            />
          </Stack>
        </div>
      </Container>
    </>
  );
};
0;

export default Experience;
