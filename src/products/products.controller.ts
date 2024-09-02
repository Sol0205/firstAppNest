import { Controller, Patch, Get, Post, Put, Delete, Body, Query, Param } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
// import { UpdateProductDto } from './dto/update-product.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('/products')
@ApiTags('Products')
export class ProductController {
    constructor(private productsService: ProductsService) { }

    @Get()
    @ApiOperation({ summary: 'Get all products' })
    getAllProducts(@Query() query: any) {
        console.log('Query: ', query);
        return this.productsService.getProducts();
    }

    @Get('/:id')
    @ApiOperation({ summary: 'Get products by id' })
    @ApiResponse({ status: 200, description: 'Return all products.' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 200, description: 'Return all products.' })
    getProduct(@Param('id') id: string) {
        console.log('id: ', id);
        return this.productsService.getProduct(parseInt(id));
    }

    @Post()
    @ApiOperation({ summary: 'Create a products' })
    createProduct(@Body() product: CreateProductDto) {
        return this.productsService.createProduct(product);
    }

    // @Put()
    // @ApiOperation({ summary: 'Update a products' })
    // updateProduct(@Body() product: UpdateProductDto) {
    //     return this.productsService.updateProduct(product);
    // }

    @Delete()
    @ApiOperation({ summary: 'Delete a products' })
    deleteProduct() {
        return this.productsService.deleteProduct();
    }

    @Patch()
    @ApiOperation({ summary: 'Update product status' })
    updateProductStatus() {
        return this.productsService.updateProductStatus();
    }

}
