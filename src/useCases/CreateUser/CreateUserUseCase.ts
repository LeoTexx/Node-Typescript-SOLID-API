import { IMailProvider } from "./../../providers/IMailProvider";
import { ICreateUserRequestDTO } from "./CreateUserDTO";
import { IUsersRepository } from "./../../repositories/IUsersRepository";
import { User } from "../../entities/User";
export class CreateUserUseCase {
  constructor(
    private usersRepository: IUsersRepository,
    private mailProvider: IMailProvider
  ) {}

  async execute(data: ICreateUserRequestDTO) {
    const userAlreadyExists = await this.usersRepository.findByEmail(
      data.email
    );
    if (userAlreadyExists) {
      throw new Error(`User already exits`);
    }
    const user = new User(data);

    await this.usersRepository.save(user);

    await this.mailProvider.sendMail({
      to: {
        name: data.name,
        email: data.email,
      },
      from: {
        name: "Our Team",
        email: "team@ourapp.com",
      },
      subject: "Congratulations, you have successfully created a new user!!",
      body: "<p> Now you can login and start using your new account.</p>",
    });
  }
}
