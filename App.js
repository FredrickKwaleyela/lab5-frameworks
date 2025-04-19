import { useState } from "react";
import "./styles.css";

/*export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}*/

export default function App({ name }) {
  const [showMessage, setShowMessage] = useState(false);

  const toggleMessage = () => {
    setShowMessage((prev) => !prev);
  };

  return (
    <div className="App">
      <h1>Welcome, {name}!</h1>
      <button onClick={toggleMessage}>
        {showMessage ? "Hide" : "Show"} Message
      </button>
      {showMessage && <p>This is a toggled message!</p>}
    </div>
  );
}
