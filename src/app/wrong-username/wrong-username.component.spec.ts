import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrongUsernameComponent } from './wrong-username.component';

describe('WrongUsernameComponent', () => {
  let component: WrongUsernameComponent;
  let fixture: ComponentFixture<WrongUsernameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrongUsernameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WrongUsernameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
