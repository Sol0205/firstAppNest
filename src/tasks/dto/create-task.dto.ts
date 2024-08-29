import { IsString, MinLength } from 'class-validator'

export class CreateTaskDto {
    @IsString()
    @MinLength(1)
    Title: string

    @IsString()
    @MinLength(1)
    Description: string
}