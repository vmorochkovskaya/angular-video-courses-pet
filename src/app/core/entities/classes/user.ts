import {UserEntity} from '../user-entity';
import {NameEntity} from '../name-entity';

export class User implements UserEntity {
  id: number;
  name: NameEntity;
  login: string;
  password: string;
  token: string;

  constructor() {
  }
}
