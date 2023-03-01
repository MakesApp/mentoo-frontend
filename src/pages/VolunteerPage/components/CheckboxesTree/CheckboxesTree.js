import React, { useState } from "react";
import CheckboxTree from "react-checkbox-tree";
import "react-checkbox-tree/lib/react-checkbox-tree.css";
import { regionsData } from "./constants";
import style from "./styles.css";

function CheckboxesTree() {
  const [checked, setChecked] = useState([]);
  const [expanded, setExpanded] = useState([]);

  return (
    <>
      <CheckboxTree
        nodes={regionsData}
        expanded={expanded}
        onExpand={(expanded) => setExpanded(expanded)}
        checked={checked}
        onCheck={(checked) => setChecked(checked)}
        showNodeIcon={false}
      />
      {console.log(`check: ${checked}`)}
    </>
  );
}

export default CheckboxesTree;
