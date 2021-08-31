import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacteListComponent } from './characte-list.component';

describe('CharacteListComponent', () => {
  let component: CharacteListComponent;
  let fixture: ComponentFixture<CharacteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacteListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
