import { User } from "../database/models";
import { UserRepository } from "../repositories/user.repository";

export class UserService {
    private userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

    async createUser(firstname: string, lastname: string, email: string, password: string, status: number): Promise<User> {
        return await this.userRepository.createUser(firstname, lastname, email, password, status);
    }

    async updateUnverifiedUser(id: string, firstname: string, lastname: string, email: string, password: string, status: number): Promise<[affectedCount: number]> {
        return await this.userRepository.updateUnverifiedUser(id, firstname, lastname, email, password, status);
    }

    async getUsers(): Promise<User[]> {
        return this.userRepository.getUsers();
    }

    async getUser(id: number): Promise<User | null> {
        const user = await this.userRepository.getUser(id);
        return user;
    }

    async findUser(email: string): Promise<User | null> {
        const user = await this.userRepository.findUser(email);
        if (!user) {
            return null;
        }
        return user;
    }

}
