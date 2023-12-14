import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Company6Component } from './company6.component';

describe('Company6Component', () => {
  let component: Company6Component;
  let fixture: ComponentFixture<Company6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Company6Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Company6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
