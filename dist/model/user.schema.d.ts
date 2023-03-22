/// <reference types="mongoose" />
export declare type UserDocument = User & Document;
export declare class User {
    fullname: string;
    email: string;
    password: string;
    createdDate: Date;
}
export declare const UserSchema: import("mongoose").Schema<import("mongoose").Document<User, any, any>, import("mongoose").Model<import("mongoose").Document<User, any, any>, any, any, any>, any, any>;
