import styles from "./StatelessCounter.module.scss";

export default function StatelessCounter() {
  let count = 0;
  console.log("rendered stateless");

  return (
    <button
      className={styles.colorred}
      style={{ fontSize: "2em" }}
      onClick={handleClick}
    >
      count is {count}
    </button>
  );

  function handleClick() {
    count++;
    console.log(`stateless: ${count}`);
  }
}
