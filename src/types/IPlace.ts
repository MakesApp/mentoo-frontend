export interface IPlace {
  _id:string;
  placeName: string;
  availableDays: string[];
  address: string;
  description: string;
  audience: string;
  placeImage?: string;
  userId: string;
}
