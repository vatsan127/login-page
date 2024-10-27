import { useState } from "react";

function Navbar() {
  setInterval(updateTime, 1000);

  const now = new Date().toLocaleTimeString();
  const [time, setTime] = useState(now);

  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  return (
    <nav className="navbar navbar-expand bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          React Login Page
        </a>
        <div className="d-flex">{time}</div>
      </div>
    </nav>
  );
}

export default Navbar;
