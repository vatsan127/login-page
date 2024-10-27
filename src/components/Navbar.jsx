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
    <nav className="navbar navbar-expand bg-primary">
      <div className="container-fluid">
        <h1 className="navbar-brand text-white ">React Login Page</h1>
        <div className="d-flex">
          <h4 className="text-white">{time}</h4>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
