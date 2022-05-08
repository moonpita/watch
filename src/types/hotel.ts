export interface Hotel {
    city: string;
    src: string;
    name: string;
    type: string;
    imageSrc: string;
    price: number;
    rating: number;
    favorite: boolean;
    id: number,
    detailImages: string[];
    detailProperties: string[];
    detailReviews: ReviewType[];
}


export type ReviewType = {
    avatarSrc: string;
    name: string;
    rating: number;
    text: string;
    date: string;
    reviewId: number;
}

export type HotelList = Hotel[];

// export interface HotelDetail extends Hotel {
//     detailImages: string[];
//     detailProperties: string[];
//     detailReviews: Review[];
// }
