import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommentPagePage } from './comment-page.page';

describe('CommentPagePage', () => {
  let component: CommentPagePage;
  let fixture: ComponentFixture<CommentPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
