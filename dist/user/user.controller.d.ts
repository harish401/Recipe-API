import { User } from './models/user.entity';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    all(): Promise<User[]>;
    getById(id: string): Promise<User>;
}
