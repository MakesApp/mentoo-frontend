export interface IUser  {
  email: string;
  password: string;
  role: string;
  avatar?: string; // avatar is optional
  fullName: string;
  placeId?: string; // placeId is optional
}