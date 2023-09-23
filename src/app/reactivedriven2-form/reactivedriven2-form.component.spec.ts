import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reactivedriven2FormComponent } from './reactivedriven2-form.component';

describe('Reactivedriven2FormComponent', () => {
  let component: Reactivedriven2FormComponent;
  let fixture: ComponentFixture<Reactivedriven2FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Reactivedriven2FormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reactivedriven2FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
