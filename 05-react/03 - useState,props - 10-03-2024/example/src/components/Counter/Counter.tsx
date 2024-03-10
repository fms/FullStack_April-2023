import { useEffect, useState } from "react";

export default function Counter() {
  const [countClicks, setCountClicks] = useState(0);
  const [total, setTotal] = useState(0);

  function updateCounts(change: number) {
    setCountClicks((countClicks) => countClicks + 1);
    setTotal((total) => total + change);
  }

  useEffect(() => console.log(`Clicks: ${countClicks}`), [countClicks]);
  useEffect(() => console.log(`Clicks: ${total}`), [total]);

  return (
    <>
      <p>Total: {total}</p>
      <p>Clicks: {countClicks}</p>
      <button onClick={() => updateCounts(2)}>Add 2</button>
      <button onClick={() => updateCounts(-2)}>Subtract 2</button>
    </>
  );
}
