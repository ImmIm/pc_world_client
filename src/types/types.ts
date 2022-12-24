
export type UserInfo = {
    id: number;
    first_name: string;
    last_name: string;
    e_mail: string;
    password: string;
    phone: string | undefined;
    image: string | undefined;
} | null

export type UserResponce = {
    user: UserInfo;
    image: any;
}

export type loginData = {
    email: string;
    password: string;
}