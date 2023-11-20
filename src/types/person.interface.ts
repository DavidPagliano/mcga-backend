export interface PersonData {
    name: string;
    lastName: string;
    address: {
        nameAddress: string;
        numberAddress: number;
        city: string;
        state: string;
        country: string;
    };
    birthdate: Date;
    dni: number;
    phone: number;
    email: string;
    gender: {
        female: string;
        male: string;
        other: string;
    };
}