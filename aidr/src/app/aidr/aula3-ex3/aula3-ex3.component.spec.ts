import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aula3Ex3Component } from './aula3-ex3.component';

describe('Aula3Ex3Component', () => {
  let component: Aula3Ex3Component;
  let fixture: ComponentFixture<Aula3Ex3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Aula3Ex3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aula3Ex3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
