import { FindOptions, UpdateOptions } from "sequelize";
import { User } from "../database/models";

export class UserRepository {
    async createUser(firstname: string, lastname: string, email: string, password: string, status: number): Promise<User> {
        return await User.create({ firstname, lastname, email, password, status, role: 1 });
    }
    async updateUnverifiedUser(id: string, firstname: string, lastname: string, email: string, password: string, status: number): Promise<[affectedCount: number]> {
        const options: UpdateOptions = {
            where: { id },
        };
        return await User.update({ firstname, lastname, email, password, status, role: 1 }, options);
    }
    async getUsers(): Promise<User[]> {
        return await User.findAll();
    }
    async getUser(id: number): Promise<User | null> {
        const options: FindOptions = {
            where: { id },
        };
        return await User.findOne(options);
    }
    async findUser(email: string): Promise<User | null> {
        const options: FindOptions = {
            where: { email },
        };
        return await User.findOne(options);
    }



}
