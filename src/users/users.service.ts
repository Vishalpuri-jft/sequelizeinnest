import { Inject, Injectable } from '@nestjs/common';
//import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';
import { vishal } from './users.entity';
@Injectable()
export class UsersService {
  constructor(
    @Inject('vishal_REPOSITORY')
    private usersRepository: typeof vishal,
  ) {}

  async findAll(): Promise<vishal[]> {
    return this.usersRepository.findAll<vishal>();
  }

  async create(Name: string, Job: string, Salary: number) {
    try {
      const user = {
        Name,
        Job,
        Salary,
      };
      console.log(user);
      await this.usersRepository.create(user);
      return this.usersRepository.findAll<vishal>();
    } catch (error) {
      console.log(error);
    }
  }
  async remove(id: number) {
    const user = this.usersRepository.findByPk<vishal>(id);
    await (await user)?.destroy();
  }

  findOne(id: number) {
    return this.usersRepository.findByPk<vishal>(id);
  }

  async update(id: number, Name: string, Job: string, Salary: number) {
    try {
      const user = await this.usersRepository.findByPk<vishal>(id);
      await user?.update({ Name, Job, Salary });
      return this.usersRepository.findAll<vishal>();
    } catch (error) {
      console.log(error);
    }
  }
}
