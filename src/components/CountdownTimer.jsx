import  { useEffect, useState } from "react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(300); // 300 seconds = 5:00

  useEffect(() => {
    if (timeLeft <= 0) return; // Stop countdown when time reaches 0

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? `0${secs}` : secs}`;
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.timer}>{formatTime(timeLeft)}</h1>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#282c34",
    color: "#11A81BFF",
    fontFamily: "Arial, sans-serif",
  },
  timer: {
    fontSize: "64px",
    fontWeight: "bold",
  },
};

export default CountdownTimer;
