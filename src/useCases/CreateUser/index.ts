import { CreateUserController } from "./CreateUserController";
import { PostgresUserRepository } from "./../../repositories/implementations/PostgresUserRepository";
import { MailTrapMailProvider } from "./../../providers/implementations/MailTrapMailProvider";
import { CreateUserUseCase } from "./CreateUserUseCase";
const mailtrapMailProvider = new MailTrapMailProvider();
const postgresUserRepository = new PostgresUserRepository();

const createUserUseCase = new CreateUserUseCase(
  postgresUserRepository,
  mailtrapMailProvider
);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserController, createUserUseCase };
