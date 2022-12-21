import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthService } from '../auth/auth.service';

//import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private authservice: AuthService,
  ) {}

  @Post()
  createUser(
    @Body('Name') Name: string,
    @Body('Job') Job: string,
    @Body('Salary') Salary: number,
  ) {
    return this.usersService.create(Name, Job, Salary);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }

  @Patch('/:id')
  update(
    @Param('id') id: number,
    @Body('Name') Name: string,
    @Body('Job') Job: string,
    @Body('Salary') Salary: number,
  ) {
    return this.usersService.update(id, Name, Job, Salary);
  }

  @Post('/login')
  login(@Body() req: { Name: string }) {
    return this.authservice.login(req);
  }
}
