import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import * as fs from 'fs';
import * as path from 'path';

@Controller('face')
export class FaceController {
  @Post('detect')
  @UseInterceptors(FileInterceptor('image'))
  async detectFace(@UploadedFile() file: Express.Multer.File) {
    // เก็บไฟล์ลงโฟลเดอร์ uploads (สร้างโฟลเดอร์ถ้าไม่มี)
    const uploadsDir = path.join(process.cwd(), 'uploads');
    if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir);
    const filePath = path.join(uploadsDir, file.originalname || `upload_${Date.now()}.jpg`);
    fs.writeFileSync(filePath, file.buffer);

    // ตัวอย่าง response จำลอง (mock) -- พิกัดเป็นพิกเซลสำหรับภาพที่แสดง (frontend ต้องรองรับ scale)
    const faces = [
      { x: 50, y: 80, width: 120, height: 120 },
      { x: 230, y: 90, width: 110, height: 110 },
    ];

    return { faces };
  }
}
