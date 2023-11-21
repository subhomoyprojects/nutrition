import React from "react";
import CommonAuthWrapper from "../components/CommonAuthWrapper";
import { Box, Typography } from "@mui/material";
import assets from "../assets";
import { VisuallyHiddenInput } from "../style/AuthWrapperStyle";
import { CloudUpload } from "@mui/icons-material";
import { CommonButton } from "../style/CommonButton";
import { ColorPalette } from "../assets/scss/ThemePalet";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { CommonInputType } from "../style/CommonInputType";
import { useDispatch } from "react-redux";
import { registerAuth } from "../redux/slice/AuthSlice";

export default function Signup() {
  const dispatch = useDispatch();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      const { first_name, last_name, email, password, profile_pic } = data;
      const formData = new FormData();
      formData.append("first_name", first_name);
      formData.append("last_name", last_name);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("profile_pic", profile_pic[0]);

      const response = await dispatch(registerAuth(formData)); // Use await to handle the promise
      console.log(response);

      // Check the response status or data here and update your UI accordingly
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <CommonAuthWrapper title="Signup" subInfo="Create your new account for lorem@email.com by completing these details." rightImage={assets.signup}>
        <Box className="leftSide">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box className="form-group">
              <Box>
                <label>First Name</label>
                <CommonInputType variant="outlined" label="Enter your first name" {...register("first_name", { required: true, minLength: 3 })} error={!!errors.first_name} helperText={errors.first_name?.type === "required" ? "First name is required" : errors.first_name?.type === "minLength" ? "Minimum 3 characters are required" : ""} />
              </Box>
              <Box>
                <label>Last Name</label>
                <CommonInputType variant="outlined" label="Enter your last name" {...register("last_name", { required: true, minLength: 2 })} error={!!errors.last_name} helperText={errors.last_name?.type === "required" ? "Last name is required" : errors.last_name?.type === "minLength" ? "Minimum two characters are required." : ""} />
              </Box>
            </Box>
            <Box className="form-group">
              <label>Email</label>
              <CommonInputType variant="outlined" label="Enter your email" {...register("email", { required: true, pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ })} error={!!errors.email} helperText={errors.email?.type === "required" ? "Email is required" : errors.email?.type === "pattern" ? "Valid email is required" : ""} />
            </Box>
            <Box className="form-group">
              <label>Password</label>
              <CommonInputType variant="outlined" label="Enter your password" {...register("password", { required: true, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/ })} error={!!errors.email} helperText={errors.password?.type === "required" ? "Password is required" : errors.password?.type === "pattern" ? "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number, and one special character" : ""} />
            </Box>
            <Box className="form-group">
              <CommonButton component="label" variant="contained" startIcon={<CloudUpload />} style={{ backgroundColor: `${ColorPalette.secondaryColor}` }}>
                Upload file
                <VisuallyHiddenInput type="file" {...register("profile_pic", { required: true })} />
              </CommonButton>
              {!!errors.profile_pic && <span className="error">{errors.profile_pic?.type === "required" ? "Please add an image" : ""}</span>}
            </Box>
            <Box className="form-group text-center">
              <CommonButton type="submit" fullWidth variant="contained" style={{ backgroundColor: `${ColorPalette.primaryColor}` }}>
                Signup
              </CommonButton>
            </Box>
          </form>
          <Typography variant="body1" className="pageGo">
            Already have an account? <Link to="/login">Sigin</Link>
          </Typography>
        </Box>
      </CommonAuthWrapper>
    </>
  );
}
