import { BaseEntity } from "../base.entity";

export class BaseDto{
    id : string;

    createdAt?: Date;
  
    updatedAt?: Date;
  
    // Add this column to your entity!
    
    deletedAt?: Date;

    constructor(base : BaseEntity){
        this.id = base?.id
        this.createdAt = base?.createdAt
        this.updatedAt = base?.updatedAt
        this.deletedAt = base?.deletedAt
        
    }
  
  
}