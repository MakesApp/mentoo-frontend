import "react";
// import { regionsData } from "./constants";
import Checkboxes from 'react-checkbox-tree'
import "./style.css";
export const regionsData = [
  {
    value: "צפון",
    label: "צפון",
    children: [
      {  value: "אזור חיפה", label: "אזור חיפה" },
      {  value: "אזור הקריות", label: "אזור הקריות" },
      {  value: "אזור עכו ונהריה", label: "אזור עכו ונהריה" },
      {  value: "אזור הגליל העליון", label: "אזור הגליל העליון" },
      {  value: "אזור הכנרת", label: "אזור הכנרת" },
      {  value: "אזור כרמיאל", label: "אזור כרמיאל" },
      {  value: "אזור נצרת", label: "אזור נצרת" },
      {  value: "אזור ראש פינה", label: "אזור ראש פינה" },
      {  value: "אזור הגליל התחתון", label: "אזור הגליל התחתון" },
      {  value: "אזור רמת הגולן", label: "אזור רמת הגולן" },
    ],
  },
  {
    value: "השרון",
    label: "השרון",
    children: [
      {  value: "אזור נתניה", label: "אזור נתניה" },
      {  value: "אזור רמת השרון", label: "אזור רמת השרון" },
      {  value: "אזור רעננה", label: "אזור רעננה" },
      {  value: "אזור הוד השרון", label: "אזור הוד השרון" },
    ],
  },
  {
    value: "ירושלים",
    label: "ירושלים",
    children: [
      { value: "אזור ירושלים", label: "אזור ירושלים" },
      { value: "אזור בית שמש", label: "אזור בית שמש" },
      { value: "אזור מבשרת ציון", label: "אזור מבשרת ציון" },
      { value: "אזור מעלה אדומים", label: "אזור מעלה אדומים" },
    ],
  },
  {
    value: "שפלה ואשדוד",
    label: "שפלה ואשדוד",
    children: [
      {
        value: "אזור נס ציונה ורחובות",
        label: "אזור נס ציונה ורחובות",
      },
      {  value: "אזור אשדוד ואשקלון", label: "אזור אשדוד ואשקלון" },
      {  value: "אזור גדרה ויבנה", label: "אזור גדרה ויבנה" },
      {  value: "אזור קרית גת", label: "אזור קרית גת" },
      {  value: "אזור השפלה", label: "אזור השפלה" },
    ],
  },
  {
    value: "יהודה ושומרון ובקעת הירדן ",
    label: "יהודה ושומרון ובקעת הירדן ",
    children: [
      {  value: "אזור דרום הר חברון", label: "אזור דרום הר חברון" },
      {  value: "אזור ישובי השומרון", label: "אזור ישובי השומרון" },
      {  value: "אזור גוש עציון", label: "אזור גוש עציון" },
      {
        value: "אזור בקעת הירדן וצפון ים המלח ",
        label: "אזור בקעת הירדן וצפון ים המלח ",
      },
      {  value: "אזור אריאל", label: "אזור אריאל" },
    ],
  },
  {
    value: "הדרום והנגב",
    label: "הדרום והנגב",
    children: [
      {  value: "אזור באר שבע", label: "אזור באר שבע" },
      {  value: "אזור אילת והערבה", label: "אזור אילת והערבה" },
      {  value: "אזור הר הנגב", label: "אזור הר הנגב" },
      {  value: "אזור הנגב המערבי ", label: "אזור הנגב המערבי " },
      {  value: "אזור דרום ים המלח", label: "אזור דרום ים המלח" },
    ],
  },
  {
    value: "המרכז",
    label: "המרכז",
    children: [
      {  value: "אזור תל אביב", label: "אזור תל אביב" },
      {  value: "אזור ראשון", label: "אזור ראשון" },
      {  value: "אזור חולון", label: "אזור חולון" },
      {  value: "אזור רמת גן", label: "אזור רמת גן" },
      {  value: "אזור ראש העין", label: "אזור ראש העין" },
      {  value: "אזור בקעת אונו", label: "אזור בקעת אונו" },
      {  value: "אזור רמלה ", label: "אזור רמלה " },
      {  value: "אזור בני ברק", label: "אזור בני ברק" },
      {  value: "אזור שוהם", label: "אזור שוהם" },
      {  value: "אזור מודיעין ", label: "אזור מודיעין " },
    ],
  },
];

function CheckboxesTree({regions,setRegions,expanded,setExpanded}) {
  

  return (
    <>
      <Checkboxes
      
        nodes={regionsData}
        expanded={expanded}
        onExpand={(expanded) => setExpanded(expanded)}
        checked={regions}
        onCheck={(regions) => setRegions(regions)}
        showNodeIcon={false}
        icons={{
        check: <span className="rct-icon rct-icon-check" />,
        uncheck: <span className="rct-icon rct-icon-uncheck" />,
        halfCheck: <span className="rct-icon rct-icon-half-check" />,
        expandClose: <span className="rct-icon rct-icon-expand-close" />,
        expandOpen: <span className="rct-icon rct-icon-expand-open" />,
        expandAll: <span className="rct-icon rct-icon-expand-all" />,
        collapseAll: <span className="rct-icon rct-icon-collapse-all" />,
        parentClose: <span className="rct-icon rct-icon-parent-close" />,
        parentOpen: <span className="rct-icon rct-icon-parent-open" />,
        leaf: <span className="rct-icon rct-icon-leaf" />,
    }}
      />
    </>
  );
}

export default CheckboxesTree;