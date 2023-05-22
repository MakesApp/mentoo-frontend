import CheckboxTree from "react-checkbox-tree";
// import "react-checkbox-tree/lib/react-checkbox-tree.css";
import { regionsData } from "./constants";
// import "./style.css";

function CheckboxesTree({regions,setRegions,expanded,setExpanded}) {
  

  return (
    <>
      <CheckboxTree
        nodes={regionsData}
        expanded={expanded}
        onExpand={(expanded) => setExpanded(expanded)}
        checked={regions}
        onCheck={(regions) => setRegions(regions)}
        showNodeIcon={false}
      />
    </>
  );
}

export default CheckboxesTree;