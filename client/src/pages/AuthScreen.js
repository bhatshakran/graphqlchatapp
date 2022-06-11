import React, { useState } from "react";
import { Box, Stack, Typography, Button, TextField } from "@mui/material";

const AuthScreen = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="80vh"
    >
      <Stack direction="column" spacing={2} sx={{ width: "400px" }}>
        <Typography variant="h5">Please Signup</Typography>
        <TextField
          name="firstName"
          label="First Name"
          variant="standard"
          onChange={handleChange}
        />
        <TextField
          name="lastName"
          label="Last Name"
          variant="standard"
          onChange={handleChange}
        />
        <TextField
          type="email"
          name="email"
          label="email"
          variant="standard"
          onChange={handleChange}
        />
        <TextField
          type="password"
          name="password"
          label="password"
          variant="standard"
          onChange={handleChange}
        />
        <Button variant="outlined" type="submit">
          Submit
        </Button>
      </Stack>
    </Box>
  );
};

export default AuthScreen;
