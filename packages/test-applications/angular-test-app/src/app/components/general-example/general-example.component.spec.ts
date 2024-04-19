import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralExampleComponent } from './general-example.component';

describe('GeneralExampleComponent', () => {
  let component: GeneralExampleComponent;
  let fixture: ComponentFixture<GeneralExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GeneralExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GeneralExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
