export default function MobileContainer({ children }) {
  return (
    <div className="app-wrapper">
      <div className="mobile-container">
        {children}
      </div>
    </div>
  );
}