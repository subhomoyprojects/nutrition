import React from "react";
import { CommonModalStyle } from "../style/CommonModalStyle";
import { Box, Typography } from "@mui/material";
import { CommonButton } from "../style/CommonButton";
import { listProduct, removeProduct } from "../redux/slice/ProductSlice";
import { useDispatch } from "react-redux";
import { ColorPalette } from "../assets/scss/ThemePalet";

export default function CustomModalComponent({ openModal, handleClose, id }) {
  const dispatch = useDispatch();
  return (
    <CommonModalStyle open={openModal} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
      <Box className="modalHolder">
        <Typography id="modal-modal-title" variant="h3" className="text-center">
          Delete Product?
        </Typography>
        <Typography id="modal-modal-description" variant="body1">
          Are you sure you want to delete your product?
        </Typography>
        <Box className="actionBtnHolder">
          <CommonButton
            onClick={() => {
              dispatch(removeProduct({ id })).then(() => dispatch(listProduct()));
              dispatch(listProduct({ perpage: 9 }));
              handleClose();
            }}
            variant="contained"
            className="delete"
            style={{ backgroundColor: `${ColorPalette.primaryColor}` }}
          >
            Delete
          </CommonButton>
          <CommonButton onClick={handleClose} variant="contained" className="delete" style={{ backgroundColor: `${ColorPalette.secondaryColor}` }}>
            Cancel
          </CommonButton>
        </Box>
      </Box>
    </CommonModalStyle>
  );
}
