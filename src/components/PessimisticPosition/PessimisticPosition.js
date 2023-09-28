import React from "react";
import { Typography } from "@mui/material";

export default function PessimisticPosition({ pessimisticPositionResults }) {
  return (
    <>
      {pessimisticPositionResults.map((result, index) => (
        <Typography variant="h3" color="#90caf9">
          {`${Object.entries(result)
            .map(([key, value]) => `${key}: ${value.toFixed(3)}`)
            .join(", ")}`}
        </Typography>
      ))}
    </>
  );
}
