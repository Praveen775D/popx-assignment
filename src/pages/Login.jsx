import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MobileContainer from "../components/MobileContainer";
import "../styles/login.css";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const storedUser = localStorage.getItem("user");

    if (!storedUser) {
      alert("Please register first");
      return;
    }

    const user = JSON.parse(storedUser);

    if (!email.trim()) {
      alert("Email is required");
      return;
    }

    if (!password.trim()) {
      alert("Password is required");
      return;
    }

    const enteredEmail = email.trim().toLowerCase();
    const storedEmail = user.email.trim().toLowerCase();

    if (
      enteredEmail === storedEmail &&
      password === user.password
    ) {
      navigate("/account");
    } else {
      alert("Invalid Email or Password");
    }
  };

  return (
    <MobileContainer>
      <div className="page-container">
        <h1 className="page-title">
          Signin to your PopX account
        </h1>

        <p className="page-subtitle">
          Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </p>

        <div className="input-group">
          <label>Email Address</label>

          <input
            type="email"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Password</label>

          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          className="login-submit"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </MobileContainer>
  );
}