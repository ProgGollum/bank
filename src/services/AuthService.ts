import $api from "../http/index"
import {AxiosResponse} from "axios";
import {AuthResponse} from "@/models/response/AuthResponse";

export default class AuthService {
    static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return await $api.post<AuthResponse>('/api/user/login', {email, password})
    }

    static async registration(email: string, password: string, firstName: string, lastName: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('api/user/registration', {email, password, firstName, lastName})
    }

    static async check() {
        return $api.get<AuthResponse>('/api/user/auth')
    }
}