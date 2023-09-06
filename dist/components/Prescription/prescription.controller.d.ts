import { PrescriptionService } from './prescription.service';
import { AddPrescriptionDTO, GetPrescriptionDTO, UpdateStatus } from './prescription.dto';
export declare class PrescriptionController {
    private readonly prescriptionService;
    constructor(prescriptionService: PrescriptionService);
    add(obj: AddPrescriptionDTO, res: any, req: any): Promise<any>;
    updateStatus(obj: UpdateStatus, res: any, req: any): Promise<any>;
    getAllPrescriptionByPaginate(obj: GetPrescriptionDTO, res: any, req: any): Promise<any>;
}
