import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudAddEditComponent } from './crud-add-edit.component';

describe('CrudAddEditComponent', () => {
  let component: CrudAddEditComponent;
  let fixture: ComponentFixture<CrudAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrudAddEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrudAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
