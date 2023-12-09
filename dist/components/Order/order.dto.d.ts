export declare class AddOrderDTO {
    contact_email: string;
    contact_name: string;
    contact_phone: string;
    contact_address: string;
    order_detail: Array<object>;
    total_price: number;
}
export declare class GetOrderDTO {
    status: string;
    page_number: string;
    page_size: string;
}
export declare class UpdateStatus {
    _id: string;
    status: string;
}
