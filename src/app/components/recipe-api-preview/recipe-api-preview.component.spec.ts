import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeApiPreviewComponent } from './recipe-api-preview.component';

describe('RecipeApiPreviewComponent', () => {
  let component: RecipeApiPreviewComponent;
  let fixture: ComponentFixture<RecipeApiPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeApiPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeApiPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
