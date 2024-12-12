import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordFileEditorComponent } from './word-file-editor.component';

describe('WordFileEditorComponent', () => {
  let component: WordFileEditorComponent;
  let fixture: ComponentFixture<WordFileEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WordFileEditorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordFileEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
