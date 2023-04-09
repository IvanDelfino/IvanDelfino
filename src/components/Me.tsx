import { Container, Grid, Paper, Skeleton } from "@mui/material";
import React from "react";
import Chip from "./Chip";
import CarrouselChip from "./CarrouselChip";

const Me = () => {
  return (
    <Paper elevation={24}>
      <Container>
        <Grid container spacing={2} justifyContent={"center"}>
          <Grid item xs={12}>
            <div className="yop">
              <h3>Hey there!</h3>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className="centrar">
              <Skeleton variant="rounded" height={350} width={350} />
            </div>
          </Grid>
          <Grid item xs={12} md={8}>
            <div className="aboutMe">
              <span>
                Hi! My name is Ivan Delfino, I'm a Web Developer Jr. with a
                passion for programming and technology.
              </span>
              <p>
                I have a degree in Software Engineer by Universidad Politecnica
                de Aguascalientes. I'm committed to ongoing learning and
                development of my skills. I recently have worked on various
                personal projects that have allowed me to explore different
                programming languages and technologies. I enjoy working in teams
                and learning from more experienced developers, as I know this
                will help me improve my skills. In terms of my technical skills,
                I have experience with HTML, CSS, JavaScript, Java and SQL. I
                have also worked with popular frameworks such as React and
                NodeJs.
              </p>
              <p>
                I'm interested in learning more about emerging technologies and
                consolidate my knowledge. In addition to my technical skills, I
                value clear and effective communication, attention to detail,
                and creative problem-solving. I believe these skills are
                important for working in teams and delivering successful
                projects. I love the thinking of what else can techlonogy do to
                improve our society, so I try to keep in touch with all brands
                of techlonogy advance, and try to be part of this changes.
              </p>
            </div>
          </Grid>
          <Grid>
            <h5>Some of my skills...</h5>
          </Grid>
          <Grid item xs={12}>
            <div className="chips-cont">
              <CarrouselChip />
            </div>
          </Grid>
        </Grid>
      </Container>
      <br />
    </Paper>
  );
};

export default Me;
