import { useState } from "react";

function Input({ label, state, setState, type='text' }) {
  const [value, setValue] = useState(state);

  return (
    <div className="form-floating">
      <input
        value={state}
        onChange={(e) => setState(e.target.value)}
        type={type}
        className="form-control"
        placeholder={label}
      />
      <label for="floatingInput">{label}</label>
    </div>
  );
}

export default Input;
