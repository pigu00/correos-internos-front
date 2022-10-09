import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajesRecibidosComponent } from './mensajes-recibidos.component';

describe('MensajesRecibidosComponent', () => {
  let component: MensajesRecibidosComponent;
  let fixture: ComponentFixture<MensajesRecibidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensajesRecibidosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MensajesRecibidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
