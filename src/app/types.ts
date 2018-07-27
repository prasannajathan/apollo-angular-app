export type Course = {
  id: number;
  title: string;
  author: string;
  description: string;
  topic: string;
  url: string;
}

export type Query = {
  allCourses: Course[];
}

// From QA
export type School = {
  Id: number;
  Name: string;
  Caption: string;
  Location: Location;
}

export type Location = {
  AddressLine1: string;
  AddressLine2: string;
  City: string;
  CountryCode: string;
  CountryId: number;
  CountryName: string;
  Latitude: string;
  LocationId: number;
  Longitude: string;
  SchoolId: number;
  State: string;
  StateId: number;
}

export type PopularSchools = {
  getpopularschools: School[];
}