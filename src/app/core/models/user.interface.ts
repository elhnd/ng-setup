import { Credential } from "./credential.interface";

export interface User extends Credential{
    id?: string;
}