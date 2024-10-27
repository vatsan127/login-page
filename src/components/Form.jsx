import React from "react";
import { useState } from "react";
import FormInput from "./FormInput";
import inputFields from "../config/FormInputConfig";

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

  function formInputFields(config) {
    return (
      <FormInput
        key={config.id}
        type={config.type}
        class={config.class}
        placeholder={config.placeholder}
      />
    );
  }

  return (
    <div className="d-flex flex-column align-items-center mt-3">
      <h1>{getWelcomeMessage()}</h1>
      <form>
        <div className="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">
            @
          </span>
          <input
            type="text"
            className="form-control username"
            placeholder="Username"
            onChange={handleChange}
            value={name}
            required
          />
        </div>

        {inputFields.map(formInputFields)}
        <button className="btn btn-primary w-100 py-2" type="submit">
          Sign in
        </button>
      </form>
    </div>
  );
}

export default Form;
