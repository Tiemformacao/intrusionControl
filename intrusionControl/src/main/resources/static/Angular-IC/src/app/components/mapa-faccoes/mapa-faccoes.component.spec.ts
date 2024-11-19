import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaFaccoesComponent } from './mapa-faccoes.component';

describe('MapaFaccoesComponent', () => {
  let component: MapaFaccoesComponent;
  let fixture: ComponentFixture<MapaFaccoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapaFaccoesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapaFaccoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
