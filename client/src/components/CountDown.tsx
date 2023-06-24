import React, { useEffect, useState } from "react";

const Countdown: React.FC = () => {
  const [seconds, setSeconds] = useState<number>(60);
  const radius = 25;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds === 0) {
          // Restart the timer when it reaches 0
          return 60;
        }
        return prevSeconds - 1;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const calculateProgress = (): number => {
    const progress = (60 - seconds) / 60;

    return progress * circumference;
  };

  return (
    <svg width={radius * 2} height={radius * 2}>
      <circle
        cx={radius}
        cy={radius}
        r={radius - 10}
        fill="none"
        stroke="#ddd"
        strokeWidth={2}
      />
      <circle
        cx={radius}
        cy={radius}
        r={radius - 10}
        fill="none"
        stroke="#3dc6c1"
        strokeWidth={3}
        strokeDasharray={circumference}
        strokeDashoffset={calculateProgress()}
        strokeLinecap="round"
        transform={`rotate(-90 ${radius} ${radius})`}
      />
      <text
        id="second-text"
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="12"
        fontFamily="Oswald"
        fill="#fff"
      >
        {seconds}
      </text>
    </svg>
  );
};

export default Countdown;
