import React, { useState, useEffect } from "react";
function Clock() {
  const [currentTiem, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const time = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => {
      clearInterval(time);
    };
  }, []);

  return <h1 id="clock">{currentTiem.toLocaleTimeString()}</h1>;
}

export default Clock;
