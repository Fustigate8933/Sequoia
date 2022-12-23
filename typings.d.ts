interface SanityBody{
    _createdAt: string;
    _id: string;
    _rev: string;
    _UpdatedAt: string;
}

export interface Coffee extends SanityBody {
    _type: "coffee"
    cnname: string;
    enname: string;
    price: number;
}

export interface Milktea extends SanityBody {
    _type: "milktea"
    cnname: string;
    enname: string;
    price: number;
}

export interface Other extends SanityBody {
    _type: "other"
    cnname: string;
    enname: string;
    price: number;
}

