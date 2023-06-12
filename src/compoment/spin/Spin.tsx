import React, { useState } from "react";

interface SpinProps {
  options: string[];
}

const SpinX: React.FC<SpinProps> = ({ options }) => {
  const [result, setResult] = useState<string | null>(null);
  const [isSpinning, setIsSpinning] = useState(false);

  const spin = () => {
    setIsSpinning(true);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * options.length);
      setResult(options[randomIndex]);
      setIsSpinning(false);
    }, 2000);
  };

  return (
    <div>
      <button onClick={spin} disabled={isSpinning}>
        {isSpinning ? "Spinning..." : "Spin"}
      </button>
      {result && <p>The result is: {result}</p>}
    </div>
  );
};

export default SpinX;
