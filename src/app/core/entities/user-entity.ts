import {NameEntity} from './name-entity';

export interface UserEntity {
  id: number;
  name: NameEntity;
  login: string;
  password: string;
  token: string;
}
