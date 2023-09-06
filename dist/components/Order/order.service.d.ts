import { AddOrderDTO } from './order.dto';
export declare class OrderService {
    addOrder(obj: AddOrderDTO): Promise<{
        status: number;
        message: any;
    }>;
}
