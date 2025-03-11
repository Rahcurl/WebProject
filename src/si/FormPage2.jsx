import React from "react";

const FormPage2 = ({ onNext, onBack, setRate }) => {
  return (
    <div>
      <h2>Enter Rate of Interest</h2>
      <input
        type="number"
        defaultValue="7"
        onChange={(e) => setRate(e.target.value)}
      />
      <button onClick={onBack}>Back</button>
      <button onClick={onNext}>Next</button>
    </div>
  );
};

export default FormPage2;
