import React, { useRef, useLayoutEffect, useState } from "react";
import { status } from "./constants";

export default function Checkbox({
  indeterminate,
  checked,
  id,
  compute,
  ...rest
}) {
  const inputRef = useRef(null);
  const [userChoice, setUserChoice] = useState("");

  useLayoutEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = indeterminate;
      inputRef.current.checked = checked;
    }
  }, [indeterminate, checked]);

  return (
    <input
      {...rest}
      ref={inputRef}
      type="checkbox"
      onChange={() => {
        console.log(id);

        setUserChoice((prev) => {
          return [prev, inputRef.current];
        });
        const newStatus = inputRef.current.checked
          ? status.checked
          : status.unchecked;
        compute(id, newStatus);
      }}
    />
  );
}
