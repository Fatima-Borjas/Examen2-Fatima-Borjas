import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Photo } from '../models/photo.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl;

  getPhotos(): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.apiUrl}/photos`);
  }

  getPhotoById(id: number): Observable<Photo> {
    return this.http.get<Photo>(`${this.apiUrl}/photos/${id}`);
  }

  getLimitedPhotos(limit: number = 50): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.apiUrl}/photos?_limit=${limit}`);
  }
}