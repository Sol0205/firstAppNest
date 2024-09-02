import { Module } from '@nestjs/common';
import { ProductModule } from './products/products.module';
import { ProjectsModule } from './projects/projects.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { HelloController } from './hello/hello.controller';

@Module({
  imports: [ProductModule, ProjectsModule, AuthModule, UsersModule],
  controllers: [HelloController],
})
export class AppModule { }
