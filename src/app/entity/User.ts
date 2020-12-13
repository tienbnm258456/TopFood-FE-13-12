import { Role } from './Role';

export class User{
    id: number;
    userName: String;
    firstName: String;
    lastName: String;
    phone: String;
    gender: number;
    email: String;
    password: String;
    status: number;
    createDate: Date;
    updateAt: Date;
    roles: Role[]
}