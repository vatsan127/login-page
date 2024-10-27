import { useState } from "react";

function Form() {
  const [name, setName] = useState("");

  function handleChange(event) {
    const { className, value } = event.target;

    if (className.includes("username")) {
      setName(value);
    }
  }

  function getWelcomeMessage() {
    if (!name) return "Welcome!";
    return "Welcome, " + name.charAt(0).toUpperCase() + name.slice(1) + "!";
  }

  // function createForm() {}

  return (
    <div className="container mt-3">
      <h1>{getWelcomeMessage()}</h1>
      <form>
        <div className="mb-3">
          <input
            type="text"
            className="form-control username"
            placeholder="User Name"
            onChange={handleChange}
            value={name}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
}

export default Form;
