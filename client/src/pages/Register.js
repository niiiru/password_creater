import { useRef } from "react";
import { TextField, Button, Box } from "@mui/material";
import axios from "axios";

function Register() {
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  function register(e) {
    e.preventDefault();
    axios
      .post("http://localhost:5001/api/v1/auth/register", {
        email: emailInputRef.current.value,
        password: passwordInputRef.current.value,
      })
      .then(() => alert("Вы зарегистрировались!"))
      .catch(({ response }) => {
        alert(response.data.message);
      });
  }

  return (
    <form onSubmit={register}>
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
          Зарегистрироваться
        </Button>
      </Box>
    </form>
  );
}

export default Register;
