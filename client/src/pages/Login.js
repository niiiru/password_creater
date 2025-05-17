import React from "react";
import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <form>
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

        <button type="onclick">Login</button>
      </form>
    </div>
  );
}

export default Login;
