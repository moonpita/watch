export type Hotel = {
    city: string;
    src: string;
    name: string;
    type: string;
    imageSrc: string;
    price: number;
    rating: number;
    favorite: boolean;
    id: number,
}

export type HotelList = Hotel[];
