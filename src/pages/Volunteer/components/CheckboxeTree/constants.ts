interface Node {
  id: number;
  name: string;
  children?: Node[];
}

export const regionData: Node[] = [
  {
    id: 1,
    name: 'צפון',
    children: [
      { id: 2, name: 'אזור חיפה' },
      { id: 3, name: 'אזור הקריות' },
      { id: 4, name: 'אזור עכו ונהריה' },
      { id: 5, name: 'אזור הגליל העליון' },
      { id: 6, name: 'אזור הכנרת' },
      { id: 7, name: 'אזור כרמיאל' },
      { id: 8, name: 'אזור נצרת' },
      { id: 9, name: 'אזור ראש פינה' },
      { id: 10, name: 'אזור הגליל התחתון' },
      { id: 11, name: 'אזור רמת הגולן' },
    ],
  },
  {
    id: 12,
    name: 'השרון',
    children: [
      { id: 13, name: 'אזור נתניה' },
      { id: 14, name: 'אזור רמת השרון' },
      { id: 15, name: 'אזור רעננה' },
      { id: 16, name: 'אזור הוד השרון' },
    ],
  },
  {
    id: 17,
    name: 'ירושלים',
    children: [
      { id: 18, name: 'אזור ירושלים' },
      { id: 19, name: 'אזור בית שמש' },
      { id: 20, name: 'אזור מבשרת ציון' },
      { id: 21, name: 'אזור מעלה אדומים' },
    ],
  },
  {
    id: 22,
    name: 'שפלה ואשדוד',
    children: [
      { id: 23, name: 'אזור נס ציונה ורחובות' },
      { id: 24, name: 'אזור אשדוד ואשקלון' },
      { id: 25, name: 'אזור גדרה ויבנה' },
      { id: 26, name: 'אזור קרית גת' },
      { id: 27, name: 'אזור השפלה' },
    ],
  },
  {
    id: 28,
    name: 'יהודה ושומרון ובקעת הירדן ',
    children: [
      { id: 29, name: 'אזור דרום הר חברון' },
      { id: 30, name: 'אזור ישובי השומרון' },
      { id: 31, name: 'אזור גוש עציון' },
      { id: 32, name: 'אזור בקעת הירדן וצפון ים המלח ' },
      { id: 33, name: 'אזור אריאל' },
    ],
  },
  {
    id: 34,
    name: 'הדרום והנגב',
    children: [
      { id: 35, name: 'אזור באר שבע' },
      { id: 36, name: 'אזור אילת והערבה' },
      { id: 37, name: 'אזור הר הנגב' },
      { id: 38, name: 'אזור הנגב המערבי ' },
      { id: 39, name: 'אזור דרום ים המלח' },
    ],
  },
  {
    id: 40,
    name: 'המרכז',
    children: [
      { id: 41, name: 'אזור תל אביב' },
      { id: 42, name: 'אזור ראשון' },
      { id: 43, name: 'אזור חולון' },
      { id: 44, name: 'אזור רמת גן' },
      { id: 45, name: 'אזור ראש העין' },
      { id: 46, name: 'אזור בקעת אונו' },
      { id: 47, name: 'אזור רמלה ' },
      { id: 48, name: 'אזור בני ברק' },
      { id: 49, name: 'אזור שוהם' },
      { id: 50, name: 'אזור מודיעין ' },
    ],
  },
  {
    id: 41,
    name: 'אונליין',
  }
];
