import { IUser } from './IUser';

export interface IPlace {
  _id: string;
  placeName: string;
  availableDays: string[];
  address: string;
  description: string;
  audience: string;
  placeImage?: string;
  user: IUser;
}
