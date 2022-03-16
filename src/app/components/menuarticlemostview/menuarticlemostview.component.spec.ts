import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuarticlemostviewComponent } from './menuarticlemostview.component';

describe('MenuarticlemostviewComponent', () => {
  let component: MenuarticlemostviewComponent;
  let fixture: ComponentFixture<MenuarticlemostviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuarticlemostviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuarticlemostviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
