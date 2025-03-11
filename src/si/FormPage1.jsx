import React from "react";

const FormPage1 = ({ onNext, setPrinciple }) => {
  return (
    <div>
      <h2>Enter Principle</h2>
      <input
        type="number"
        defaultValue="10000"
        onChange={(e) => setPrinciple(e.target.value)}
      />
      <button onClick={onNext}>Next</button>
    </div>
  );
};

export default FormPage1;
