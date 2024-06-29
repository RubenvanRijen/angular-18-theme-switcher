import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MulitpleThemesComponent } from './mulitple-themes.component';

describe('MulitpleThemesComponent', () => {
  let component: MulitpleThemesComponent;
  let fixture: ComponentFixture<MulitpleThemesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MulitpleThemesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MulitpleThemesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
