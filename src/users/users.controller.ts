import {
  Controller,
  Get,
  Post,
  Body,
  //Patch,
  Param,
  Delete,
  Put,
  Patch,
} from '@nestjs/common';
import { UsersService } from './users.service';
//import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // @Post()
  // create(@Body() createUserDto: CreateUserDto) {
  //   return this.usersService.create(createUserDto);
  // }
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

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.usersService.update(+id, updateUserDto);
  // }

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
}

// @Get()
//   getAllUser() {
//     return this.userservice.getAllUser();
//   }

//   @Get('/:id')
//   getUserById(@Param('id') id: number) {
//     return this.userservice.getUserById(id);
//   }

//   @Delete('/:id')
//   deleteUser(@Param('id') id: number) {
//     this.userservice.deleteUser(id);
//     return `user ${id} is deleted`;
//   }

//   @Put('/:id')
//   update(
//     @Param('id') id: number,
//     @Body('Name') Name: string,
//     @Body('Job') Job: string,
//     @Body('Salary') Salary: number,
//   ) {
//     return this.userservice.updateUser(Name, Job, Salary, id);
//   }
//   @Post('/login')
//   login(@Body() req: { Name: string }) {
//     return this.authservice.login(req);
//   }
