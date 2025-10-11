 Angular Frontend (example)  Face-Blur

 การใช้งานสั้น ๆ:

 1. สร้างโปรเจกต์ Angular (ถ้ายังไม่มี):
  ng new face-demo --routing=false --style=css
2. คัดลอกโฟลเดอร์ src/app/face-detect ไปยังโปรเจกต์ของคุณ
3. ลง dependency หากยังไม่มี: npm i @angular/common @angular/core @angular/forms @angular/platform-browser
4. เพิ่ม HttpClientModule ใน AppModule และประกาศ FaceDetectComponent
5. เรียกใช้งาน <app-face-detect></app-face-detect> ใน AppComponent
6. รัน ng serve และเปิดหน้าเว็บ
