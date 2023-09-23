import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Templatedriven2FormComponent } from './templatedriven2-form.component';

describe('Templatedriven2FormComponent', () => {
  let component: Templatedriven2FormComponent;
  let fixture: ComponentFixture<Templatedriven2FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Templatedriven2FormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Templatedriven2FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
