import React from "react";

const ResultPage = ({ principle, rate, duration }) => {
  // Convert string inputs to numbers
  const principleAsNumber = parseFloat(principle) || 0;
  const rateAsNumber = parseFloat(rate) || 0;
  const durationAsNumber = parseFloat(duration) || 0;

  // Calculate total amount
  const total =
    principleAsNumber * (1 + (rateAsNumber / 100) * durationAsNumber);
 
  return (
    <div>
      <h2>Result</h2>
      <p>Total Amount: {total.toFixed(2)}</p>
    </div>
  );
};

export default ResultPage;
