import { useEffect, useMemo, useState } from "react";

export default function MemoReferenceDemo() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  // This will trigger the useEffect on each render - this is checked by
  // reference and since it's a new object, the value is considered changed.
  // const person = { firstName, lastName };

  // Instead, useMemo to cache the value and generate a new object only when
  // the dependencies are updated.
  const person = useMemo(() => {
    return { firstName, lastName };
  }, [firstName, lastName]);

  useEffect(
    () => console.log(`person changed: ${JSON.stringify(person)}`),
    [person]
  );

  return (
    <div>
      <div>
        First Name:
        <input
          type="text"
          onInput={(ev) =>
            setFirstName(() => (ev.target as HTMLInputElement).value)
          }
          content="First name: "
        />
      </div>
      <div>
        Last Name:
        <input
          type="text"
          onInput={(ev) =>
            setLastName(() => (ev.target as HTMLInputElement).value)
          }
          content="Last Name: "
        />
      </div>
    </div>
  );
}
