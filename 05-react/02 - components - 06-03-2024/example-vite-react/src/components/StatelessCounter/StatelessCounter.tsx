export default function StatelessCounter() {
  let count = 0;
  console.log("rendered stateless");

  return <button onClick={handleClick}>count is {count}</button>;

  function handleClick() {
    count++;
    console.log(`stateless: ${count}`);
  }
}
