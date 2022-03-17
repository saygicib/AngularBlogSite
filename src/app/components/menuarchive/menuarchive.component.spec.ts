import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuarchiveComponent } from './menuarchive.component';

describe('MenuarchiveComponent', () => {
  let component: MenuarchiveComponent;
  let fixture: ComponentFixture<MenuarchiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuarchiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuarchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
