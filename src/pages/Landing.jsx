import { useNavigate } from "react-router-dom";
import MobileContainer from "../components/MobileContainer";
import "../styles/landing.css";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <MobileContainer>
      <div className="landing-page">
        <h1 className="landing-title">
          Welcome to PopX
        </h1>

        <p className="landing-subtitle">
          Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </p>

        <button
          className="create-btn"
          onClick={() => navigate("/register")}
        >
          Create Account
        </button>

        <button
          className="login-btn"
          onClick={() => navigate("/login")}
        >
          Already Registered? Login
        </button>
      </div>
    </MobileContainer>
  );
}