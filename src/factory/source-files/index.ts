export default class factory {
    /** Factory constructor for Car interface */
    static Car(colour?: string, make?: string, model?: string): Car {
        return {colour: "hi",make: "hi",model: "hi"};
    }

    /** Factory constructor for Manufacturer interface */
    static Manufacturer(car?: string): Manufacturer {
        return {car: "hi"};
    }
}

export interface Car {
    colour: string;
    make: string;
    model: string;
}

export interface Manufacturer {
    car: string;
}
