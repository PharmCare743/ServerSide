export declare class AddProductDTO {
    item_name: string;
    description: string;
    pack_size: string;
    item_price: string;
    discount_price: string;
    discount_percentage: string;
    quantity: string;
    status: string;
    type: string;
    image: string;
}
export declare class UpdateProductDTO {
    item_name: string;
    _id: string;
    description: string;
    pack_size: string;
    item_price: string;
    discount_price: string;
    discount_percentage: string;
    quantity: string;
    status: string;
    type: string;
    image: string;
}
export declare class GetProductDTO {
    type: string;
}
export declare class GetProductPaginateDTO {
    type: string;
    page_number: string;
    page_size: string;
    start_with: string;
    status: string;
}
export declare class updateStatus {
    id: string;
    status: string;
}
