import { useEffect, useState } from "react";

interface ItemListProps {
  getItems: () => number[];
}
export default function ItemList({ getItems }: ItemListProps) {
  const [items, setItems] = useState<number[]>([]);

  useEffect(() => {
    console.log("updating items");
    setItems(getItems());
  }, [getItems]);
  return (
    <>
      <div>ItemList</div>
      {items.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </>
  );
}
