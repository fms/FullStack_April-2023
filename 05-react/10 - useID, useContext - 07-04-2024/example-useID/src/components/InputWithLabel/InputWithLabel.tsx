import { useId } from "react";

interface InputWithLabelProps {
  label: string;
}
export default function InputWithLabel({ label }: InputWithLabelProps) {
  const id = useId();

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} type="text" />
    </div>
  );
}
