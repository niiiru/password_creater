import axios from "axios";
import React from "react";
import { useRef } from "react";
import { TextField, Button, Box } from "@mui/material";

function Login() {
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  function login(e) {
    e.preventDefault();
    axios
      .post("http://localhost:5001/api/v1/auth/login", {
        email: emailInputRef.current.value,
        password: passwordInputRef.current.value,
      })
      .then(() => alert("Logged in"))
      .catch(({ response }) => {
        alert(response.data.message);
      });
  }
  return (
    <form onSubmit={login}>
      <Box
        sx={{
          maxWidth: 300,
          mx: "auto",
          mt: 10,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <TextField
          label="Email"
          type="email"
          fullWidth
          inputRef={emailInputRef}
          required
        />
        <TextField
          label="Пароль"
          type="password"
          fullWidth
          inputRef={passwordInputRef}
          required
        />
        <Button variant="contained" type="submit">
          Войти
        </Button>
      </Box>
    </form>
  );
}

export default Login;
