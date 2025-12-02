import React, { useState } from "react";

// Sample step data
const stepsData = [
  {
    id: "prime-test",
    title: "Prime Test",
    text: "The easiest way to check if a number is prime is to try to divide it by all smaller integers.",
  },
  {
    id: "ulam",
    title: "The Ulam Spiral",
    text: "The Ulam Spiral is a way to visualize primes in a spiral pattern.",
  },
  {
    id: "goldbach",
    title: "Goldbach Conjecture",
    text: "All even integers greater than 2 can be written as the sum of two primes.",
  },
];

const Sidebar = ({ steps, activeStep, setActiveStep }) => (
  <div className="sidebar">
    <h2>Divisibility and Primes</h2>
    <ul>
      {steps.map((step, idx) => (
        <li
          key={step.id}
          className={activeStep === idx ? "active" : ""}
          onClick={() => setActiveStep(idx)}
        >
          {step.title}
        </li>
      ))}
    </ul>
  </div>
);

const StepContent = ({ step }) => (
  <div className="step-content">
    <h3>{step.title}</h3>
    <p>{step.text}</p>
    {/* Example of adding a calculator */}
    {step.id === "prime-test" && <PrimeChecker />}
  </div>
);

const PrimeChecker = () => {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");

  const isPrime = (n) => {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  };

  const handleCheck = () => {
    setResult(isPrime(Number(number)) ? "Prime" : "Not Prime");
  };

  return (
    <div className="prime-checker">
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Enter a number"
      />
      <button onClick={handleCheck}>Check</button>
      {result && <p>Result: {result}</p>}
    </div>
  );
};

export default function Course() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="course-container" style={{ display: "flex" }}>
      <Sidebar steps={stepsData} activeStep={activeStep} setActiveStep={setActiveStep} />
      <div className="main-content" style={{ marginLeft: "20px", flex: 1 }}>
        <StepContent step={stepsData[activeStep]} />
      </div>
    </div>
  );
}
