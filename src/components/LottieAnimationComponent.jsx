import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";

const LottieAnimationComponent = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/animation.json`)
      .then((response) => response.json())
      .then((data) => setAnimationData(data))
      .catch((error) =>
        console.error("Error loading Lottie animation:", error)
      );
  }, []);

  if (!animationData) {
    return <div>Loading animation...</div>;
  }

  return (
    <div style={{ width: "100%", maxWidth: "400px", margin: "0 auto" }}>
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
};

export default LottieAnimationComponent;
