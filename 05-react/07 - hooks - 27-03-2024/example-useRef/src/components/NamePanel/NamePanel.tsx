import { useEffect, useRef, useState } from "react";

export default function NamePanel() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [count, setCount] = useState(1);
  const fullName = `${lastName} ${firstName}`;

  // This variable does not persist across renders - useRef to persist it
  // let renderCount = 1;
  const renderCount = useRef(1);

  useEffect(() => {
    // This render count doesn't update on each render - only when the values
    // change. A render triggered by the checkbox will not be counted.
    setCount(count + 1);
  }, [firstName, lastName]);

  useEffect(() => {
    // This is a true render count of the component - regardless of the actual
    // trigger - an inner state change or an external update
    renderCount.current++;
  });

  return (
    <>
      <input onChange={(ev) => setFirstName(ev.target.value)} />
      <input onChange={(ev) => setLastName(ev.target.value)} />
      <div>My name is {fullName}</div>
      <div>This component was rendered {count} times</div>
      <div>This component was rendered {renderCount.current} times</div>
    </>
  );
}
