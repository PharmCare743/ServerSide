import { AddOrderDTO, GetOrderDTO, UpdateStatus } from './order.dto';
export declare class OrderService {
    addOrder(obj: AddOrderDTO): Promise<{
        status: number;
        message: any;
    }>;
    getAllByPaginate(obj: GetOrderDTO): Promise<{
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
