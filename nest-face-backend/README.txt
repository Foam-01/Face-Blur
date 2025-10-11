 NestJS Backend (example)


 คำแนะนำการรัน (สั้น ๆ):


 1. สร้างโปรเจกต์ใหม่ หรือใช้โฟลเดอร์นี้เป็นตัวอย่าง
2. ติดตั้ง dependency: npm install
3. ติดตั้ง ts-node และ typescript หากต้องการรันแบบ TypeScript โดยตรง
    npm i -D ts-node typescript
4. รันเซิร์ฟเวอร์: npm run start
5. Endpoint: POST http://localhost:3000/face/detect
    - form field: image (file)
6. ผลลัพธ์: { faces: [ {x,y,width,height}, ... ] }
