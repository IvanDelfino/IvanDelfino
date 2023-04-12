import { Chip } from "@mui/material";
import React from "react";

const CarrouselChip = () => {
  return (
    <div className="chips">
      <Chip label="Javascript" />
      <Chip label="SQL" />
      <Chip label="ReactJS" />
      <Chip label="NodeJS" />
      <Chip label="Consumo de APIs" />
      <Chip label="Java" />
      <Chip label="Spring Framework" />

      {/* <Chip label="ESTE ES EL CHIP FINAL" /> */}
    </div>
  );
};

export default CarrouselChip;
