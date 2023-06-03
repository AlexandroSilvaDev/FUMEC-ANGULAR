export interface Users {
    id: number;
    email: string;
    password: string;
    level: number;
    team: string;
    name: string;
    photo: string;
}

export function createUser() {
    return {
        id: 0,
        email: "",
        password: "",
        level: 0,
        team: "",
        name: "",
        photo: ""
    };
}