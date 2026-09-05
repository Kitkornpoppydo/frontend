import { useState } from "react";
      import Login from "../Common/Button/Login";

function LoginForm({ onSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      email,
      password,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) =>
          setPassword(e.target.value)
        }
      />

      <Login />
    </form>
  );
}

export default LoginForm;