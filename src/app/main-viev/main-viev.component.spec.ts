import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainVievComponent } from './main-viev.component';

describe('MainVievComponent', () => {
  let component: MainVievComponent;
  let fixture: ComponentFixture<MainVievComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainVievComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainVievComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
