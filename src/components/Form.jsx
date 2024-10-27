import { useState } from "react";

function Form() {
  const [name, setName] = useState("");

  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <div className="container">
      <h1>Welcome, {name}</h1>
      <form>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
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
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
