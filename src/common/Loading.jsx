import React from "react";
import "./Loading.scss";
import { Backdrop, Typography } from "@mui/material";

export default function Loading() {
  return (
    <>
      <div className="loader-holder">
        <Backdrop className="backdropFilter" sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }} open>
          <Typography variant="h1">Loading</Typography>
          <span className="loader"></span>
        </Backdrop>
      </div>
    </>
  );
}
