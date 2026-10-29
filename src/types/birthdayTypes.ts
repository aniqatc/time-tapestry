// Purpose: Defines birthday data shapes.
import { RELATIONS } from '../constants';

interface Birthday {
  name: string;
  birthday: Date;
  link?: string;
}

export interface UserBirthday extends Birthday {
  relation: (typeof RELATIONS)[number];
}

export interface FamousBirthday extends Birthday {
  occupation?: string;
  pageCount?: number;
}
