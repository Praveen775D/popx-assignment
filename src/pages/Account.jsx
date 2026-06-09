import { useEffect, useState } from "react";
import MobileContainer from "../components/MobileContainer";
import "../styles/account.css";

export default function Account() {
  const [user, setUser] = useState({
    fullName: "Marry Doe",
    email: "Marry@gmail.com",
  });

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      const data = JSON.parse(storedUser);

      setUser({
        fullName: data.fullName || "Marry Doe",
        email: data.email || "Marry@gmail.com",
      });
    }
  }, []);

  return (
    <MobileContainer>
      <div className="account-header">
        Account Settings
      </div>

      <div className="account-body">
        <div className="profile-section">
          <div className="profile-image-wrapper">
            <img
              src="https://i.pravatar.cc/150?img=5"
              alt="Profile"
              className="profile-image"
            />

            <div className="camera-icon">
              📷
            </div>
          </div>

          <div className="profile-info">
            <h3 className="profile-name">
              {user.fullName}
            </h3>

            <p className="profile-email">
              {user.email}
            </p>
          </div>
        </div>

        <p className="profile-description">
          Lorem Ipsum Dolor Sit Amet,
          Consetetur Sadipscing Elitr,
          Sed Diam Nonumy Eirmod Tempor
          Invidunt Ut Labore Et Dolore
          Magna Aliquyam Erat, Sed Diam.
        </p>
      </div>
    </MobileContainer>
  );
}