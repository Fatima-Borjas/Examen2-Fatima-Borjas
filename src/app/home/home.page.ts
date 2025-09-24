import { Component, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // ✅ Agregar esta línea
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule] // ✅ Agregar FormsModule aquí
})
export class HomePage {
  private router = inject(Router);
  
  capturedImage: string | null = null;
  userThought: string = '';
  showImage: boolean = false;

  constructor() {}

  navigateTo(page: string) {
    this.router.navigate([page]);
  }

  async captureImage() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Prompt,
        promptLabelHeader: 'Seleccionar fuente',
        promptLabelPhoto: 'Desde galería',
        promptLabelPicture: 'Desde cámara'
      });

      if (image.dataUrl) {
        this.capturedImage = image.dataUrl;
        this.showImage = true;
      }
    } catch (error) {
      console.log('Usuario canceló la acción o hubo un error:', error);
      this.showImage = false;
    }
  }

  removeImage() {
    this.capturedImage = null;
    this.showImage = false;
  }

  submitThought() {
    if (this.userThought.trim() && this.capturedImage) {
      console.log('Pensamiento:', this.userThought);
      console.log('Imagen capturada');
      alert('¡Publicación creada exitosamente!');
      
      this.userThought = '';
      this.capturedImage = null;
      this.showImage = false;
    } else {
      alert('Por favor, agrega una imagen y escribe tu pensamiento');
    }
  }
}