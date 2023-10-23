import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aula3Ex2Component } from './aula3-ex2.component';

describe('Aula3Ex2Component', () => {
  let component: Aula3Ex2Component;
  let fixture: ComponentFixture<Aula3Ex2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Aula3Ex2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aula3Ex2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
