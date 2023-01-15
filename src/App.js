import { useState, useEffect } from "react";
import Numbers from "./components/Numbers/Numbers";
import Button from "./components/Button/Button";

const App = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);
  return (
    <div className="stopwatch">
      <Numbers time={time}/>
      <Button setRunning={setRunning} setTime={setTime}/>
    </div>
  );
}

export default App;
