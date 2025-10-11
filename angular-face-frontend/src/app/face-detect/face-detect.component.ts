import { Component } from '@angular/core';
import { FaceService } from './face.service';

@Component({
  selector: 'app-face-detect',
  templateUrl: './face-detect.component.html',
  styleUrls: ['./face-detect.component.css']
})
export class FaceDetectComponent {
  selectedImage: string | ArrayBuffer | null = null;
  faces: any[] = [];
  imageNaturalWidth = 0;
  imageNaturalHeight = 0;

  constructor(private faceService: FaceService) {}

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => (this.selectedImage = e.target?.result);
    reader.readAsDataURL(file);

    const formData = new FormData();
    formData.append('image', file);

    this.faceService.detect(formData).subscribe({
      next: (res: any) => {
        // faces expected as [{x,y,width,height}] relative to displayed image pixels
        this.faces = res.faces || [];
      },
      error: (err) => {
        console.error('Error:', err);
        alert('เกิดข้อผิดพลาดขณะเรียก API');
      },
    });
  }

  // helper to set natural size after image loads
  onImageLoad(ev: Event) {
    const img = ev.target as HTMLImageElement;
    this.imageNaturalWidth = img.naturalWidth;
    this.imageNaturalHeight = img.naturalHeight;
  }
}
