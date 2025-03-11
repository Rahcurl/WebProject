import React from "react";

const FormPage3 = ({ onNext, onBack, setDuration }) => {
  return (
    <div>
      <h2>Enter Duration (in Years)</h2>
      <input
        type="number"
        defaultValue="1"
        onChange={(e) => setDuration(e.target.value)}
      />
      <button onClick={onBack}>Back</button>
      <button onClick={onNext}>Submit</button>
    </div>
  );
};

export default FormPage3;
