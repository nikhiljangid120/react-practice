import React, { useEffect, useState } from "react"; 

function WindowSize() {
  // State to store the current window width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Function to update state when window is resized
    const handleResize = () => setWindowWidth(window.innerWidth);
    console.log("Event Listener added!");

    // Add event listener to track window resize
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove event listener when the component unmounts
    return () => {
      console.log("Event Listener Removed");
      window.removeEventListener("resize", handleResize);
    };

  }, []); // Empty dependency array ensures effect runs only once when the component mounts

  return <div>Window Size: {windowWidth}px</div>;
}

export default WindowSize;
