import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Company7Component } from './company7.component';

describe('Company7Component', () => {
  let component: Company7Component;
  let fixture: ComponentFixture<Company7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Company7Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Company7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
