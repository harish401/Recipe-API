import { Response } from 'express';
export declare class AvatarController {
    serveAvatar(filename: string, res: Response): Promise<void>;
    uploadAvatar(file: any): Promise<{
        filename: any;
    }>;
}
