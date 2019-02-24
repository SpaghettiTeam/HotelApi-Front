import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleRoomVievComponent } from './single-room-viev.component';

describe('SingleRoomVievComponent', () => {
  let component: SingleRoomVievComponent;
  let fixture: ComponentFixture<SingleRoomVievComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleRoomVievComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleRoomVievComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
