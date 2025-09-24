import { Injectable } from '@angular/core';
import { collection, getDocs, getFirestore, query, where, orderBy } from 'firebase/firestore';
import { Character } from '../models/character.model';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private db = getFirestore();

  constructor() {}

  async getCharacters(): Promise<Character[]> {
    const charactersCol = collection(this.db, 'characters');

    const q = query(
      charactersCol,
      where("gender", "==", "Male"),
      where("status", "==", "Alive"),
      orderBy("created", "desc")
    );

    const snapshot = await getDocs(q);

    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as Character[];
  }
}
