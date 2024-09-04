import { IsArray, IsBoolean, IsIn, IsISO8601, IsNumber, IsString, MinLength } from 'class-validator'

export class CreateProductDto {
    @IsString()
    @MinLength(1)
    nameProduct: string

    @IsString()
    @MinLength(1)
    description: string

    @IsArray()
    @IsString({ each: true })
    @MinLength(1, { each: true })
    category: string[]

    @IsString()
    @MinLength(1)
    dimension: string

    @IsString()
    @MinLength(1)
    color: string

    @IsNumber()
    price: number

    @IsString()
    @MinLength(1)
    currency: string

    @IsNumber()
    quantity: number

    @IsBoolean()
    available: boolean

    @IsIn(['ARS', 'USD', 'EUR', 'BTC', 'ETH',])
    featured: string

    @IsISO8601()
    creationUser: string

    @IsISO8601()
    creationDate: string

    @IsISO8601()
    updateDate: string

    @IsISO8601()
    deletionDate: string

    @IsBoolean()
    deleted: boolean
}