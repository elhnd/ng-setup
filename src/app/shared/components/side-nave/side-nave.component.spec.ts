import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNaveComponent } from './side-nave.component';

describe('SideNaveComponent', () => {
  let component: SideNaveComponent;
  let fixture: ComponentFixture<SideNaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideNaveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SideNaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
