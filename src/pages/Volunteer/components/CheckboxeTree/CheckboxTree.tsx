import React, { useState } from 'react';
import style from './CheckboxTree.module.css';
import { regionData } from './constants';

interface CheckboxTreeProps {
  checkedNodes: number[];
  setCheckedNodes: React.Dispatch<React.SetStateAction<number[]>>;
  expandedNodes: number[];
  setExpandedNodes: React.Dispatch<React.SetStateAction<number[]>>;
}

const CheckboxTree: React.FC<CheckboxTreeProps> = ({checkedNodes,setCheckedNodes,setExpandedNodes,expandedNodes}) => {

  const handleCheckChange = (node: Node, isChecked: boolean) => {
    const newCheckedNodes = [...checkedNodes];
    const updateNodes = (node: Node) => {
      const nodeIndex = newCheckedNodes.indexOf(node.name);

      if (isChecked && nodeIndex === -1) {
        newCheckedNodes.push(node.name);
      } else if (!isChecked && nodeIndex !== -1) {
        newCheckedNodes.splice(nodeIndex, 1);
      }

      node.children?.forEach(updateNodes);
    };

    updateNodes(node);
    setCheckedNodes(newCheckedNodes);
  };

  const handleToggleExpand = (name: string) => {
    const nodeIndex = expandedNodes.indexOf(name);

    if (nodeIndex === -1) {
      setExpandedNodes([...expandedNodes, name]);
    } else {
      setExpandedNodes(expandedNodes.filter(id => id !== name));
    }
  };

  const renderNode = (node: Node, level = 0) => {
    const hasChildren = node.children && node.children.length > 0;
    const isExpanded = expandedNodes.includes(node.name);

    return (
      <div  className={style.treeNode} key={node.name}>
        {hasChildren && (
          <span className={style.toggle} onClick={() => handleToggleExpand(node.name)}>
            {isExpanded ? '▼' : '▶'}
          </span>
        )}
        <label className={style.nodeLabel}>
          <input
            type="checkbox"
            checked={checkedNodes.includes(node.name)}
            onChange={(e) => handleCheckChange(node, e.target.checked)}
            onClick={(e) => e.stopPropagation()}
          />
          {node.name}
        </label>
        {hasChildren && isExpanded && node.children?.map((child) => renderNode(child, level + 1))}
      </div>
    );
  };

  return (
    <div className={style.tree}>
      {regionData.map((node) => renderNode(node))}
    </div>
  );
};

export default CheckboxTree;
