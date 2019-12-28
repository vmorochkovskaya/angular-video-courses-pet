import {UserEntity} from '../user-entity';

export class User implements UserEntity {
  firstName: string;
  id: number;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
