import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MobileContainer from "../components/MobileContainer";
import "../styles/register.css";

export default function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "Yes",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");

    if (value.length <= 10) {
      setFormData((prev) => ({
        ...prev,
        phone: value,
      }));
    }
  };

  const handleRegister = () => {
    if (!formData.fullName.trim()) {
      alert("Full Name is required");
      return;
    }

    if (!formData.phone.trim()) {
      alert("Phone Number is required");
      return;
    }

    if (!/^[0-9]{10}$/.test(formData.phone)) {
      alert("Phone Number must contain exactly 10 digits");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email.trim()) {
      alert("Email is required");
      return;
    }

    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address");
      return;
    }

    if (!formData.password) {
      alert("Password is required");
      return;
    }

    if (formData.password.length < 8) {
      alert("Password must be at least 8 characters");
      return;
    }

    if (!formData.company.trim()) {
      alert("Company Name is required");
      return;
    }

    localStorage.setItem(
      "user",
      JSON.stringify(formData)
    );

    navigate("/account");
  };

  return (
    <MobileContainer>
      <div className="register-page">
        <h1 className="register-title">
          Create your PopX account
        </h1>

        <div className="register-group">
          <label>Full Name*</label>
          <input
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Marry Doe"
          />
        </div>

        <div className="register-group">
          <label>Phone Number*</label>
          <input
            name="phone"
            value={formData.phone}
            onChange={handlePhoneChange}
            placeholder="9876543210"
          />
        </div>

        <div className="register-group">
          <label>Email Address*</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="marry@gmail.com"
          />
        </div>

        <div className="register-group">
          <label>Password*</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Minimum 8 characters"
          />
        </div>

        <div className="register-group">
          <label>Company Name*</label>
          <input
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Company Name"
          />
        </div>

        <div className="agency-label">
          Are you an Agency?*
        </div>

        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="agency"
              value="Yes"
              checked={formData.agency === "Yes"}
              onChange={handleChange}
            />
            Yes
          </label>

          <label>
            <input
              type="radio"
              name="agency"
              value="No"
              checked={formData.agency === "No"}
              onChange={handleChange}
            />
            No
          </label>
        </div>

        <button
          className="create-account-btn"
          onClick={handleRegister}
        >
          Create Account
        </button>
      </div>
    </MobileContainer>
  );
}