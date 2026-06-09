import { useNavigate } from "react-router-dom";
import MobileContainer from "../components/MobileContainer";
import "../styles/login.css";

export default function Login() {
  const navigate = useNavigate();

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
          <input placeholder="Enter email address" />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password"
          />
        </div>

        <button
          className="login-submit"
          onClick={() => navigate("/account")}
        >
          Login
        </button>
      </div>
    </MobileContainer>
  );
}