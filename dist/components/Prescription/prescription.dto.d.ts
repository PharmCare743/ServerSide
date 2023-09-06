export declare class AddPrescriptionDTO {
    contact_email: string;
    contact_name: string;
    contact_phone: string;
    image: string;
    file_name: string;
}
export declare class GetPrescriptionDTO {
    status: string;
    page_number: string;
    page_size: string;
}
export declare class UpdateStatus {
    _id: string;
    status: string;
}
