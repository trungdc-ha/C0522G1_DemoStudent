import {StudentClass} from "./StudentClass";

export interface Student {
  id?: number;
  name: string;
  birthday: string;
  gender: string;
  studentClass: StudentClass;
}
