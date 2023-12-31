import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { PaginationModule } from 'src/services/pagination/pagination.module';
import { PaginationService } from 'src/services/pagination/pagination.service';

@Module({
  imports: [PaginationModule, TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserController],
  providers: [UserService, PaginationService],
  exports: [UserService, TypeOrmModule],
})
export class UserModule {}
