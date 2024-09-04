import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";

export interface User {
    Name: string;
    Age: number;
}

@Injectable()
export class ProductsService {
    private products = [];

    getProducts() {
        return this.products;
    }

    getProduct(id: number) {
        const productFound = this.products.find((product) => product.id === id)

        if (!productFound) {
            return new NotFoundException(`Product with id ${id} not found`)
        }
        return productFound
    }

    createProduct(product: CreateProductDto) {
        console.log('product: ', product);
        this.products.push({
            ...product,
            id: this.products.length + 1,
        });
        return product
    }

    updateProduct(product: UpdateProductDto) {
        console.log('product: ', product);
        return "Actualizando productos"
    }

    deleteProduct(): User {
        return {
            Name: "Ooo",
            Age: 44
        }
    }

    updateProductStatus(): User {
        return {
            Name: "Uuu",
            Age: 55
        }
    }
}