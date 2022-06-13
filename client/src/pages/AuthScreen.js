import React, { useRef, useState } from "react";
import {
  Box,
  Stack,
  Typography,
  Button,
  TextField,
  Card,
  CircularProgress,
  Alert,
} from "@mui/material";
import { useMutation } from "@apollo/client";
import { LOGIN_USER, SIGNUP_USER } from "../graphql/mutations";

const AuthScreen = ({ setLoggedIn }) => {
  const [formData, setFormData] = useState({});
  const [showLogin, setShowLogin] = useState(true);
  const authForm = useRef(null);
  const [signupUser, { data: signupData, loading: l1, error: e1 }] =
    useMutation(SIGNUP_USER);
  const [loginUser, { data: loginData, loading: l2, error: e2 }] = useMutation(
    LOGIN_USER,
    {
      onCompleted(data) {
        localStorage.setItem("jwt", data.signinUser.token);
        setLoggedIn(true);
      },
    }
  );

  if (l1 || l2) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <CircularProgress />
        <Typography variant="h6">Authenticating...</Typography>
      </Box>
    );
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (showLogin) {
      // signinuser
      loginUser({
        variables: {
          signinInfo: formData,
        },
      });
    } else {
      signupUser({
        variables: {
          details: formData,
        },
      });
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="80vh"
      ref={authForm}
    >
      <Card variant="outlined" sx={{ padding: "10px" }}>
        <Stack direction="column" spacing={2} sx={{ width: "400px" }}>
          {signupData && (
            <Alert severity="success">
              {signupData.signupUser.firstName} Signed Up
            </Alert>
          )}
          {e1 && <Alert severity="error">{e1.message}</Alert>}
          {e2 && <Alert severity="error">{e2.message}</Alert>}
          <Typography variant="h5">
            Please
            {showLogin ? " Login" : " Signup"}
          </Typography>
          {!showLogin && (
            <>
              <TextField
                name="firstName"
                label="First Name"
                variant="standard"
                onChange={handleChange}
                required
              />
              <TextField
                name="lastName"
                label="Last Name"
                variant="standard"
                onChange={handleChange}
                required
              />
            </>
          )}

          <TextField
            type="email"
            name="email"
            label="email"
            variant="standard"
            onChange={handleChange}
            required
          />
          <TextField
            type="password"
            name="password"
            label="password"
            variant="standard"
            onChange={handleChange}
            required
          />
          <Typography
            textAlign="center"
            variant="subtitle1"
            onClick={() => {
              setShowLogin(!showLogin);
              setFormData({});
              authForm.current.reset();
            }}
          >
            {showLogin ? "Signup?" : "Login?"}
          </Typography>
          <Button variant="outlined" type="submit">
            {showLogin ? "Login" : "Signup"}
          </Button>
        </Stack>
      </Card>
    </Box>
  );
};

export default AuthScreen;
