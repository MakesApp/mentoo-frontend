import React, { useRef, useLayoutEffect, useState } from "react";
import { status } from "./constants";
import { data } from "./regionsData";

export default function Checkbox({
  indeterminate,
  checked,
  id,
  compute,
  setUserChoice,
  ...rest
}) {
  const [checkboxState, setCheckboxState] = useState([]);
  const updateRegionsInState = (data, inputReference) => {
    if (inputReference == "צפון") {
      data[0].items.forEach((item) => {
        // setUserChoice((prev) => [...prev, item.name]);
        setCheckboxState((prev) => [...prev, item.name]);
        console.log(checkboxState);
      });
    }
  };
  const inputRef = useRef(null);

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
        const newStatus = inputRef.current.checked
          ? status.checked
          : status.unchecked;

        if (newStatus === status.checked) {
          // updateRegionsInState(
          //   data,
          //   inputRef.current.attributes.name.nodeValue
          // );
          setCheckboxState((prev) => [
            ...prev,
            inputRef.current.attributes.name.nodeValue,
          ]);
          // setUserChoice(checkboxState);
          console.log(checkboxState);
          // setUserChoice((prev) => [
          //   ...prev,
          //   inputRef.current.attributes.name.nodeValue,
          // ]);
        }
        if (newStatus === status.unchecked) {
          setCheckboxState((prev) =>
            prev.filter(
              (item) => item != inputRef.current.attributes.name.nodeValue
            )
          );
          console.log(checkboxState);

          // setUserChoice((prev) =>
          //   prev.filter(
          //     (item) => item != inputRef.current.attributes.name.nodeValue
          //   )
          // );
        }

        compute(id, newStatus);
      }}
    />
  );
}
