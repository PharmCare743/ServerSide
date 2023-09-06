import { OrderService } from './order.service';
import { AddOrderDTO } from './order.dto';
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderService);
    add(obj: AddOrderDTO, res: any, req: any): Promise<any>;
}
