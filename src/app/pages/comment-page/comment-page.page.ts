import { Component, OnInit, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PhotosServiceService } from '../../services/photos-service';
import { Photo } from '../../models/photo.interface';

@Component({
  selector: 'app-comment-page',
  templateUrl: './comment-page.page.html',
  styleUrls: ['./comment-page.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, HttpClientModule]
})
export class CommentPagePage implements OnInit {
  private photosService = inject(PhotosServiceService);
  
  photos: Photo[] = [];
  loading: boolean = true;
  error: string = '';

  ngOnInit() {
    this.loadPhotos();
  }

  loadPhotos() {
    this.loading = true;
    this.photosService.getLimitedPhotos(20).subscribe({
      next: (data) => {
        this.photos = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Error al cargar las fotos';
        this.loading = false;
        console.error('Error:', err);
      }
    });
  }

  getDisplayText(photo: Photo): string {
    return `${photo.id} - ${photo.title}`;
  }

  refreshData() {
    this.loadPhotos();
  }
}