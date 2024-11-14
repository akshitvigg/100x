import React from "react";

export const ImageComp = ({ size, roundness, link }) => {
  return (
    <>
      <img width={size} style={{ borderRadius: roundness }} src={link} />
    </>
  );
};
