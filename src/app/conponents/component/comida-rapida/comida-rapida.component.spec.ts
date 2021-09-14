import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComidaRapidaComponent } from './comida-rapida.component';

describe('ComidaRapidaComponent', () => {
  let component: ComidaRapidaComponent;
  let fixture: ComponentFixture<ComidaRapidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComidaRapidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComidaRapidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
