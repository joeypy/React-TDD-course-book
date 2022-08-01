import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Accordion from "./components/Accordion";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Accordion title="Users">
        <p>Testing</p>
      </Accordion>
    </div>
  );
}

export default App;
