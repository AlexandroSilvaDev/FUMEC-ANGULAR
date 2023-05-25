export interface Curso {
    id: number;
    name: string;
    price: number;
    shortDescription: string;
    longDescription: string;
    imgUrl: string;
};

export function createCurso() {
    return {
        id: 0,
        name: "",
        price: 0,
        shortDescription: "",
        longDescription: "",
        imgUrl: ""
    };
};



