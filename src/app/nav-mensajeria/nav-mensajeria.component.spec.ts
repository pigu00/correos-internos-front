import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavMensajeriaComponent } from './nav-mensajeria.component';

describe('NavMensajeriaComponent', () => {
  let component: NavMensajeriaComponent;
  let fixture: ComponentFixture<NavMensajeriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavMensajeriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavMensajeriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
