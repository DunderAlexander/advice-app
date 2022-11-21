import React from "react";
import AdviceBox from "./AdviceBox";
import { useState, useEffect } from "react";

export default function App() {
  const [slip, setSlip] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getAdvice() {
      const adviceFromServer = await fetchAdvice();
      setSlip(adviceFromServer);
      setLoading(false);
    }
    getAdvice();
  }, []);

  // fetch an advice
  async function fetchAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    return data;
  }
  async function clickDice() {
    const newAdvice = await fetchAdvice();
    setSlip(newAdvice);
  }
  return (
    <div className="container">
      {!loading && <AdviceBox slip={slip} onClick={clickDice} />}
    </div>
  );
}
