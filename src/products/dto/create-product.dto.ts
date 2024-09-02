import { isNotEmpty, IsString, MinLength } from 'class-validator'

export class CreateProductDto {
    @IsString()
    @MinLength(1)
    name: string

    @IsString()
    @MinLength(1)
    description: string

    //modificarlo y hacer un array de strings
    //hacerlo en excalidraw
    //porque  vamos a soportar multiples categorias

    // @IsString()
    // @MinLength(1)
    // category: string []

    @IsString()
    @MinLength(1)
    dimensions: string

    @IsString()
    @MinLength(1)
    color: string

    // @IsString()
    // @MinLength(1)
    // Foto: string

    @IsString()
    @MinLength(1)
    price: number

    @IsString()
    @MinLength(1)
    carency: string

    @IsString()
    @MinLength(1)
    quantity: number

    @IsString()
    @MinLength(1)
    available: boolean

    @IsString()
    @MinLength(1)
    featured: boolean

    @IsString()
    @MinLength(1)
    creationDate: Date

    @IsString()
    @MinLength(1)
    updateDate: Date

    @IsString()
    @MinLength(1)
    creationUser: string

    // @IsString()
    // @MinLength(1)
    // usuarioActualizacion: string

    @IsString()
    @MinLength(1)
    asset: boolean

    @IsString()
    @MinLength(1)
    deleted: boolean

    // @IsString()
    // @MinLength(1)
    // fechaEliminacion: Date
}

// 1. Cambiar el tipo de dato de category a string[]
// 2. Cambiar el tipo de dato de price a number
// 3. Cambiar el tipo de dato de quantity a number
// 4. Cambiar el tipo de dato de available a boolean
// 5. Cambiar el tipo de dato de featured a boolean
// 6. Cambiar el tipo de dato de creationDate a Date
// 7. Cambiar el tipo de dato de updateDate a Date
// 8. Cambiar el tipo de dato de creationUser a string
// 9. Cambiar el tipo de dato de asset a boolean
// 10. Cambiar el tipo de dato de deleted a boolean
// 11. Cambiar el tipo de dato de fechaEliminacion a Date
// 12. Cambiar el nombre de Foto a photo
// 13. Cambiar el nombre de usuarioActualizacion a updateUserName
// 14. Cambiar el nombre de fechaEliminacion a deletionDate
// 15. Cambiar el nombre de carency a currency
// 16. Cambiar el nombre de dimensions a dimension
// 17. Cambiar el nombre de color a color



