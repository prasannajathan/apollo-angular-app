import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoollistComponent } from './schoollist.component';

describe('SchoollistComponent', () => {
  let component: SchoollistComponent;
  let fixture: ComponentFixture<SchoollistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoollistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoollistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
