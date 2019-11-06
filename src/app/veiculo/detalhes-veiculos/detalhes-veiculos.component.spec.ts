import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesVeiculosComponent } from './detalhes-veiculos.component';

describe('DetalhesVeiculosComponent', () => {
  let component: DetalhesVeiculosComponent;
  let fixture: ComponentFixture<DetalhesVeiculosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalhesVeiculosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesVeiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
