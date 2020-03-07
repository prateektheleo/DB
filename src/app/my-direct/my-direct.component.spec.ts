import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDirectComponent } from './my-direct.component';

describe('MyDirectComponent', () => {
  let component: MyDirectComponent;
  let fixture: ComponentFixture<MyDirectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDirectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
