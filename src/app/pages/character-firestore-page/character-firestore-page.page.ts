import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../services/character';
import { Character } from '../../models/character.model';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { IonHeader, IonContent, IonList, IonTitle, IonToolbar, IonCard, IonItem, IonAvatar, IonLabel } from "@ionic/angular/standalone";

@Component({
  selector: 'app-character-firestore-page',
  templateUrl: './character-firestore-page.page.html',
  styleUrls: ['./character-firestore-page.page.scss'],
  imports: [IonHeader, IonContent, IonList, IonTitle, IonToolbar, IonCard, IonItem, IonAvatar, IonLabel, CommonModule, IonicModule],
})
export class CharacterFirestorePage implements OnInit {

  characters: Character[] = [];

  constructor(private characterService: CharacterService) {}

  async ngOnInit() {
    this.characters = await this.characterService.getCharacters();
  }
}
