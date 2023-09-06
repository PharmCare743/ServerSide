import { AddPrescriptionDTO, GetPrescriptionDTO, UpdateStatus } from './prescription.dto';
export declare class PrescriptionService {
    addPrescription(obj: AddPrescriptionDTO): Promise<{
        status: number;
        message: any;
    }>;
    getAllByPaginate(obj: GetPrescriptionDTO): Promise<{
        status: number;
        totalRecords: number;
        data: any[];
        totalPages: number;
        message?: undefined;
    } | {
        status: number;
        totalRecords: number;
        data: any[];
        totalPages: number;
        message: string;
    }>;
    updateStatus(obj: UpdateStatus): Promise<{
        status: number;
        message: any;
    }>;
}
