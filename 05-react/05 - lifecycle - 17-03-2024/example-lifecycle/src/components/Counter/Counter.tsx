import { useEffect, useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  // Called when a new component is created
  useEffect(() => {
    let timerCount = 0;
    console.log("mount");
    const interval = setInterval(
      () => console.log(`timer: ${timerCount++}`),
      1000
    );
    return () => {
      console.log("unmount");
      clearInterval(interval);
    };
  }, []);

  // Called every time we need to re-render the component
  useEffect(() => {
    console.log("render");
    return () => console.log("render cleanup");
  });

  // Called when the dependencies are updated (is this case just the count state)
  useEffect(() => {
    console.log(`updated count: ${count}`);
    return () => console.log(`update cleanup ${count}`);
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </div>
  );
}
