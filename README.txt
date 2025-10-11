Face Detection Example (Angular + NestJS)


ในไฟล์ ZIP นี้มีตัวอย่างโค้ด 2 ฝั่ง:
- angular-face-frontend : โฟลเดอร์ตัวอย่าง component Angular
- nest-face-backend : โฟลเดอร์ตัวอย่าง NestJS (mock detection)

วิธีใช้งานเบื้องต้น:
1. แตกไฟล์ zip
2. ติดตั้งและรัน NestJS backend ก่อน (โฟลเดอร์ nest-face-backend):
   cd nest-face-backend
   npm install
   npm run start

3. เปิดโปรเจกต์ Angular และวางโฟลเดอร์ src/app/face-detect ลงในโปรเจกต์ของคุณ
4. นำเข้าและประกาศ FaceDetectComponent และ FaceService ใน AppModule
5. รัน ng serve แล้วเปิดหน้าเว็บ

หมายเหตุ: Endpoint ใน backend นี้ยังเป็น mock response เพื่อสาธิตการทำงาน
หากต้องการตรวจจับใบหน้าจริง ให้เพิ่ม library เช่น face-api.js, opencv4nodejs หรือเชื่อมต่อ external AI
