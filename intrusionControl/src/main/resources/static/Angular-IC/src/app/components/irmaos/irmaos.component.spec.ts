import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IrmaosComponent } from './irmaos.component';

describe('IrmaosComponent', () => {
  let component: IrmaosComponent;
  let fixture: ComponentFixture<IrmaosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IrmaosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IrmaosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
