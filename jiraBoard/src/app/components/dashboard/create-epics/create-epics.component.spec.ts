import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEpicsComponent } from './create-epics.component';

describe('CreateEpicsComponent', () => {
  let component: CreateEpicsComponent;
  let fixture: ComponentFixture<CreateEpicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEpicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEpicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
