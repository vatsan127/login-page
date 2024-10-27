import { useState } from "react";
import Form from "./components/Form";
import ResponsiveAppBar from "./components/ResponsiveAppBar";

function App() {
  setInterval(updateTime, 1000);

  const now = new Date().toLocaleTimeString();
  const [time, setTime] = useState(now);

  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  return (
    <div className="">
      <ResponsiveAppBar />
      <h1>Hello, currentTime: {time}</h1>
      <Form />
    </div>
  );
}

export default App;
