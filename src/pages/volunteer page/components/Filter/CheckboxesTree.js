import React, { useState } from "react";
import CheckboxTree from "react-checkbox-tree";
import "react-checkbox-tree/lib/react-checkbox-tree.css";
import { data } from "./regionsData";

function CheckboxesTree() {
  const [checked, setChecked] = useState([]);
  const [expanded, setExpanded] = useState([]);
  const nodes = [
    {
      value: "mars",
      label: "Mars",
      children: [
        { value: "phobos", label: "Phobos" },
        { value: "deimos", label: "Deimos" },
        { value: "phobos2", label: "Phobos" },
        { value: "deimos2", label: "Deimos" },
      ],
    },
  ];
  return (
    <>
      <CheckboxTree
        nodes={data}
        expanded={expanded}
        onExpand={(expanded) => setExpanded(expanded)}
        checked={checked}
        onCheck={(checked) => setChecked(checked)}
        showNodeIcon={false}
      />
      {console.log(`check: ${checked} expand: ${expanded}`)}
    </>
  );
}

export default CheckboxesTree;
