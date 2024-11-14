import React from "react";

export const ImageComp = ({ size, roundness }) => {
  return (
    <>
      <img
        width={size}
        style={{ borderRadius: roundness }}
        src="https://pbs.twimg.com/media/EqqUVVsXAAEyT1b.jpg"
      />
    </>
  );
};
