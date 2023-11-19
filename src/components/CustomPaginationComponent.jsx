import { Stack } from "@mui/material";
import React from "react";
import { CustomPaginationStyle } from "../style/CustomPaginationStyle";

export default function CustomPaginationComponent({ handelChange, totalPage, page }) {
  return (
    <>
      <Stack spacing={2}>
        <CustomPaginationStyle count={totalPage} page={page} variant="outlined" shape="rounded" onChange={handelChange} />
      </Stack>
    </>
  );
}
