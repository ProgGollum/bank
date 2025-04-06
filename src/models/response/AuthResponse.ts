import {IUser} from "@/models/IUser";

export interface AuthResponse{
    token: string | null
    user: IUser | null
}