import { useNavigate } from "react-router-dom";
import MobileContainer from "../components/MobileContainer";
import "../styles/register.css";

export default function Register() {
  const navigate = useNavigate();

  return (
    <MobileContainer>
      <div className="register-page">
        <h1 className="register-title">
          Create your PopX account
        </h1>

        <div className="register-group">
          <label>Full Name*</label>
          <input placeholder="Marry Doe" />
        </div>

        <div className="register-group">
          <label>Phone number*</label>
          <input placeholder="Marry Doe" />
        </div>

        <div className="register-group">
          <label>Email address*</label>
          <input placeholder="Marry Doe" />
        </div>

        <div className="register-group">
          <label>Password*</label>
          <input placeholder="Marry Doe" />
        </div>

        <div className="register-group">
          <label>Company name</label>
          <input placeholder="Marry Doe" />
        </div>

        <div className="agency-label">
          Are you an Agency?*
        </div>

        <div className="radio-group">
          <label>
            <input type="radio" name="agency" />
            Yes
          </label>

          <label>
            <input type="radio" name="agency" />
            No
          </label>
        </div>

        <button
          className="create-account-btn"
          onClick={() => navigate("/account")}
        >
          Create Account
        </button>
      </div>
    </MobileContainer>
  );
}