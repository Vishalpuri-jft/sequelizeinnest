import { vishal } from './users.entity';

export const usersProviders = [
  {
    provide: 'vishal_REPOSITORY',
    useValue: vishal,
  },
];
