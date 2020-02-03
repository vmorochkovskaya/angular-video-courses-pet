import {UserEntity} from '../user-entity';

export class User implements UserEntity {
  firstName: string;
  id: number;
  lastName: string;
  login: string;
  password: string;
  token: string;

  constructor() {
  }
}
