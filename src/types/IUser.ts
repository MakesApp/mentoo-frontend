export interface IUser {
  _id: string;
  email: string;
  password: string;
  role: string;
  avatar?: string; // avatar is optional
  fullName: string;
  placeId?: any; // placeId is optional
  hasUnreadMessages?: boolean;
  oldVolunteers: any;
  myVolunteers: any;
  candidateVolunteers: any;
}
