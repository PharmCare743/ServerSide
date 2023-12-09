import { OrderService } from './order.service';
import { AddOrderDTO, GetOrderDTO, UpdateStatus } from './order.dto';
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderService);
    add(obj: AddOrderDTO, res: any, req: any): Promise<any>;
    updateStatus(obj: UpdateStatus, res: any, req: any): Promise<any>;
    getAllPrescriptionByPaginate(obj: GetOrderDTO, res: any, req: any): Promise<any>;
}
