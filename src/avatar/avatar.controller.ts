import { Controller, Post, UseInterceptors, UploadedFile, Get, Param, Res } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { Response } from 'express';
import * as fs from 'fs';
import * as path from 'path';

@Controller('avatars')
export class AvatarController {
    @Get(':filename')
  async serveAvatar(@Param('filename') filename: string, @Res() res: Response) {
    // Define the path to the directory where avatar images are uploaded
    const avatarDir = './uploads';
    // Send the avatar image as a response
    return res.sendFile(filename, { root: avatarDir });
  }
  @Post('upload')
  @UseInterceptors(FileInterceptor('avatar', {
    storage: diskStorage({
      destination: './uploads', // Specify the upload directory
      filename: (req, file, cb) => {
        const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('');
        return cb(null, `${randomName}${extname(file.originalname)}`);
      },
    }),
  }))
  async uploadAvatar(@UploadedFile() file) {
    // Logic to handle file upload
    // Save the file path to the user's avatar field in the database
    return { filename: file.filename };
  }
}
