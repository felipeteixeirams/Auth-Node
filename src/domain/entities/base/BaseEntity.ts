import { v4 as uuidv4 } from 'uuid';

export default class BaseEntity {
   id: string;
   createdAt: Date;
   updatedAt: Date;

   constructor(id?: string, createdAt?: Date, updatedAt?: Date) {
      this.id = id || uuidv4();
      this.createdAt = createdAt || new Date();
      this.updatedAt = updatedAt || new Date();
   }

   updateTimestamps() {
      this.updatedAt = new Date();
   }
}