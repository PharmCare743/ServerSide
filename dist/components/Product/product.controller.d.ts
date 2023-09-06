import { ProductService } from './product.service';
import { AddProductDTO, GetProductDTO, GetProductPaginateDTO, UpdateProductDTO, updateStatus } from './product.dto';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    add(obj: AddProductDTO, res: any, req: any): Promise<any>;
    getAllProduct(obj: any, res: any, req: any): Promise<any>;
    getAllProductByType(obj: GetProductDTO, res: any, req: any): Promise<any>;
    getAllProductByTypePaginate(obj: GetProductPaginateDTO, res: any, req: any): Promise<any>;
    getAllProductByPaginate(obj: GetProductPaginateDTO, res: any, req: any): Promise<any>;
    updateStatus(obj: updateStatus, res: any, req: any): Promise<any>;
    updateProduct(obj: UpdateProductDTO, res: any, req: any): Promise<any>;
}
