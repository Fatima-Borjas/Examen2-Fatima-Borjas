import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class HomePage {
  
  capturedImage: string | null = null;
  userThought: string = '';
  showImage: boolean = false;

  mockPosts = [
    {
      title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      content: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto'
    },
    {
      title: 'qui est esse',
      content: 'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla'
    },
    {
      title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
      content: 'et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut'
    }
  ];

  constructor(private router: Router) {}

  navigateTo(page: string) {
    this.router.navigate([page]);
  }

  createPost() {
    console.log('Crear nuevo post');
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

  selectLocation() {
    console.log('Seleccionar ubicación');
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