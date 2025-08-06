import axios from "axios";
import { useRef } from "react";
import { TextField, Button, Box } from "@mui/material";
import { useAuth } from "../contexts/AuthContext";

function Login() {
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const { login } = useAuth();

  function handleLogin(e) {
    e.preventDefault();
    axios
      .post("http://localhost:5001/api/v1/auth/login", {
        email: emailInputRef.current.value,
        password: passwordInputRef.current.value,
      })
      .then((res) => {
        login(res.data.token); // сохраняем токен
        alert("Logged in");
      })
      .catch(({ response }) => {
        alert(response.data.message);
      });
  }

  return (
    <form onSubmit={handleLogin}>
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
          inputRef={emailInputRef}
          required
        />
        <TextField
          label="Пароль"
          type="password"
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
