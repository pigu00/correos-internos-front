import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConexionPruebaNodeComponent } from './conexion-prueba-node.component';

describe('ConexionPruebaNodeComponent', () => {
  let component: ConexionPruebaNodeComponent;
  let fixture: ComponentFixture<ConexionPruebaNodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConexionPruebaNodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConexionPruebaNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
