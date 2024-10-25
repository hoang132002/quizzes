import { Injectable, NotFoundException } from "@nestjs/common";
import { UserRepository } from "../repositories/user.repository";
import { UserDto } from "../domains/dtos/repose/user.dto";
import { SubmissionDto } from "src/modules/submission/domains/dtos/response/submission.dto";

@Injectable()
export class UserService {
    constructor(
        private readonly userRepository: UserRepository,
       
    ) { }

    async getUser(id : string) : Promise<UserDto>
    {
        const user = await this.userRepository.getUser(id);
        if (!user) throw new NotFoundException('user not found');
        const result = new UserDto(user);
        return result;
}}