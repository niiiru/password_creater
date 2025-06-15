import { useState } from "react";
import axios from "axios";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function register(e) {
    e.preventDefault();
    axios.post("http://localhost:5001/api/v1/auth/register", {
      email: username,
      password,
    });
  }

  return (
    <div>
      <form onSubmit={register}>
        <div>
          <label>Username</label>
          <input
            type="text"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <button>Register</button>
      </form>
    </div>
  );
}

export default Register;
