import App from "../App";
import {useState} from "react"

const Child = ({ title }) => {
  const [hasLiked, setHasLiked] = useState(false); // State to track button click

  // Function to toggle the text
  const handleClick = () => {
    setHasLiked(!hasLiked);
  };

  return (
    <div className="card">
      <h2>{title}</h2>
      <button onClick={handleClick}>
        {hasLiked ? "Clicked ✅" : "Click Me"}
      </button>
    </div>
  );
};

const State = () => {
  return (
    <div className="container">
      {/* Three Child components with different titles */}
      <Child title="Card 1" />
      <Child title="Card 2" />
      <Child title="Card 3" />
    </div>
  );
};

export default State;
