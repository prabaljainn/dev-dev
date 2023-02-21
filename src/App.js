import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setCount] = useState(0);

  useEffect(() => {
    document.title = `${counter} Times`;
  }, [counter]);

  return (
    <div className="flex">
      <button onClick={() => setCount(counter + 1)}>Click me </button>
      <button>{counter}</button>
    </div>
  );
}

export default App;
