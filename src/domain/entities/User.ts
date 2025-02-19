import BaseEntity from "./base/BaseEntity";

export default class User extends BaseEntity {
   fullName: string;
   email: string;
   password: string;

   constructor(
      fullName: string,
      email: string,
      password: string,
      id?: string,
      createdAt?: Date,
      updatedAt?: Date
   ) {
      super(id, createdAt, updatedAt);
      this.fullName = fullName;
      this.email = email;
      this.password = password;
   }
}