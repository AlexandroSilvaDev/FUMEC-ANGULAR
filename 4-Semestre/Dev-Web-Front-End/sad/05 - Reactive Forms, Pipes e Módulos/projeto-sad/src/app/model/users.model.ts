export interface Users {
    id: number;
    email: string;
    password: string;
    level: number;
    team: string;
    name: string;
    photo: string;
    TCS: number;
    CTS: number;
    CNTS: number;
    CAS: number;
    CNAS: number;
    CSS: number;
    CNSS: number;
}

export function createUser() {
    return {
        id: 0,
        email: "",
        password: "",
        level: 0,
        team: "",
        name: "",
        photo: "",
        TCS: 0,
        CTS: 0,
        CNTS: 0,
        CAS: 0,
        CNAS: 0,
        CSS: 0,
        CNSS: 0
    };
}