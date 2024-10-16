import React, { useRef } from "react";
import "./styles.css";

interface Props {
  todoText: string;
  setToDoText: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}
const InputField: React.FC<Props> = ({ todoText, setToDoText, handleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
        type="text"
        placeholder="Task Name"
        className="input__box"
        value={todoText}
        onChange={(e) => setToDoText(e.target.value)}
      />
      <button className="input_submit" type="submit">
        Add
      </button>
    </form>
  );
};

export default InputField;
