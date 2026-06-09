import MobileContainer from "../components/MobileContainer";
import "../styles/account.css";

export default function Account() {
  return (
    <MobileContainer>
      <div className="account-header">
        Account Settings
      </div>

      <div className="account-body">
        <div className="profile-section">
          <img
            src="https://i.pravatar.cc/100"
            alt="profile"
          />

          <div>
            <div className="profile-name">
              Marry Doe
            </div>

            <div className="profile-email">
              Marry@example.com
            </div>
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