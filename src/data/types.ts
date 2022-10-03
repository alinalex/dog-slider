export type Status = 'loading' | 'success' | 'error';

export interface Dog {
    id: number;
    name: string;
    temperament: string;
    image: string;
}

export interface DogoResult {
    status: Status;
    data: Dog[] | [];
}