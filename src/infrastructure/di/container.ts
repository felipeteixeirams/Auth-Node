import 'reflect-metadata';
import { container } from 'tsyringe';

import IUserApp from '@domain/interfaces/application/IUserApp';
import UserApp from 'applications/use-cases/UserApp';

import IUserRepository from '@domain/interfaces/repositories/IUserRepository';
import UserRepository from 'infrastructure/database/repositories/UserRepository';

container.registerSingleton<IUserRepository>(
   'UserRepository', UserRepository
);

container.registerSingleton<IUserApp>(
   'UserApp', UserApp
);