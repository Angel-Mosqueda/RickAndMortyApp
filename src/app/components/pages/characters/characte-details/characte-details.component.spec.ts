import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacteDetailsComponent } from './characte-details.component';

describe('CharacteDetailsComponent', () => {
  let component: CharacteDetailsComponent;
  let fixture: ComponentFixture<CharacteDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacteDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacteDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
