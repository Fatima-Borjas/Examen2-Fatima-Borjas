import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharacterFirestorePagePage } from './character-firestore-page.page';

describe('CharacterFirestorePagePage', () => {
  let component: CharacterFirestorePagePage;
  let fixture: ComponentFixture<CharacterFirestorePagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterFirestorePagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
