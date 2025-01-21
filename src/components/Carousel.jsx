import  { useEffect, useState } from "react";

const images = [
  "/image1.jpg",
  "/image2.png",
  "/image3.jpg",
  "/image4.jpg",
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, []);

  return (
    <div style={styles.container}>
      {/* Title with animation */}
      <div style={styles.titleContainer}>
        <h1 style={styles.title} className="fade-in">
          Rahcurl <span style={styles.highlight}>World</span>
        </h1>
      </div>

      {/* Carousel */}
      <div style={styles.carousel}>
        <div
          style={{
            ...styles.imageWrapper,
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
          className="slide"
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              style={styles.image}
            />
          ))}
        </div>
        <div style={styles.indicators}>
          {images.map((_, index) => (
            <div
              key={index}
              style={{
                ...styles.indicator,
                backgroundColor: currentIndex === index ? "#ff6f61" : "#ccc",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#1e1e2f",
    color: "#fff",
    fontFamily: "'Poppins', sans-serif",
    overflow: "hidden",
  },
  titleContainer: {
    textAlign: "center",
    marginBottom: "20px",
    animation: "fadeIn 2s ease-in-out",
  },
  title: {
    fontSize: "48px",
    fontWeight: "700",
    margin: 0,
    color: "#fff",
    textShadow: "2px 2px 8px rgba(0, 0, 0, 0.5)",
  },
  highlight: {
    color: "#ff6f61",
    textShadow: "2px 2px 10px rgba(255, 111, 97, 0.8)",
  },
  carousel: {
    position: "relative",
    width: "600px",
    height: "400px",
    overflow: "hidden",
    borderRadius: "10px",
    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
  },
  imageWrapper: {
    display: "flex",
    transition: "transform 1s ease-in-out",
  },
  image: {
    width: "600px",
    height: "400px",
    objectFit: "cover",
  },
  indicators: {
    display: "flex",
    justifyContent: "center",
    marginTop: "15px",
  },
  indicator: {
    width: "12px",
    height: "12px",
    margin: "0 5px",
    borderRadius: "50%",
    transition: "background-color 0.3s ease",
  },
};

export default Carousel;
