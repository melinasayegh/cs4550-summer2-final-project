import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeApiPageComponent } from './recipe-api-page.component';

describe('RecipeApiPageComponent', () => {
  let component: RecipeApiPageComponent;
  let fixture: ComponentFixture<RecipeApiPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeApiPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeApiPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
