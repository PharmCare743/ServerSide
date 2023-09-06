import { AddProductDTO, GetProductDTO, GetProductPaginateDTO, UpdateProductDTO, updateStatus } from './product.dto';
export declare class ProductService {
    addProduct(obj: AddProductDTO): Promise<{
        status: number;
        message: any;
    }>;
    getAll(): Promise<{
        status: number;
        totalRecords: number;
        data: any[];
    }>;
    getAllByType(obj: GetProductDTO): Promise<{
        status: number;
        totalRecords: number;
        data: any[];
    }>;
    getAllByTypePaginate(obj: GetProductPaginateDTO): Promise<{
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
    getAllByPaginate(obj: GetProductPaginateDTO): Promise<{
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
    updateStatus(obj: updateStatus): Promise<{
        status: number;
        message: any;
    }>;
    updateProduct(obj: UpdateProductDTO): Promise<{
        status: number;
        message: any;
    }>;
}
