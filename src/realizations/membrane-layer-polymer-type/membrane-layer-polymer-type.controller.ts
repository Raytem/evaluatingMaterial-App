import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { MembraneLayerPolymerTypeService } from './membrane-layer-polymer-type.service';
import { CreateMembraneLayerPolymerTypeDto } from './dto/create-membrane-layer-polymer-type.dto';
import { UpdateMembraneLayerPolymerTypeDto } from './dto/update-membrane-layer-polymer-type.dto';
import { Admin } from 'src/decorators/admin.decorator';
import { PaginationDto } from 'src/services/pagination/dto/pagination.dto';
import {
  ApiBasicAuth,
  ApiOperation,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { MembraneLayerPolymerTypeEntity } from './entities/membrane-layer-polymer-type.entity';

@ApiBasicAuth()
@ApiTags('membrane-layer-polymer-type')
@Controller('membrane-layer-polymer-type')
export class MembraneLayerPolymerTypeController {
  constructor(
    private readonly membraneLayerPolymerTypeService: MembraneLayerPolymerTypeService,
  ) {}

  @ApiResponse({ type: MembraneLayerPolymerTypeEntity })
  @ApiOperation({ summary: 'ADMIN' })
  @Admin()
  @Post()
  async create(
    @Body() createAbrasionTypeDto: CreateMembraneLayerPolymerTypeDto,
  ) {
    return this.membraneLayerPolymerTypeService.create(createAbrasionTypeDto);
  }

  @ApiQuery({
    name: 'page',
    type: Number,
    required: false,
  })
  @ApiQuery({
    name: 'perPage',
    type: Number,
    required: false,
  })
  @ApiResponse({ type: MembraneLayerPolymerTypeEntity, isArray: true })
  @Get()
  async findAll(@Query() paginationDto: PaginationDto) {
    return await this.membraneLayerPolymerTypeService.findAll(paginationDto);
  }

  @ApiResponse({ type: MembraneLayerPolymerTypeEntity })
  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.membraneLayerPolymerTypeService.findOne(id);
  }

  @ApiResponse({ type: MembraneLayerPolymerTypeEntity })
  @ApiOperation({ summary: 'ADMIN' })
  @Admin()
  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateAbrasionTypeDto: UpdateMembraneLayerPolymerTypeDto,
  ) {
    return await this.membraneLayerPolymerTypeService.update(
      id,
      updateAbrasionTypeDto,
    );
  }

  @ApiResponse({ type: MembraneLayerPolymerTypeEntity })
  @ApiOperation({ summary: 'ADMIN' })
  @Admin()
  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.membraneLayerPolymerTypeService.remove(id);
  }
}
