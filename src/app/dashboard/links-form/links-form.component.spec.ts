import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinksFormComponent } from './links-form.component';

describe('LinksFormComponent', () => {
  let component: LinksFormComponent;
  let fixture: ComponentFixture<LinksFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LinksFormComponent]
    });
    fixture = TestBed.createComponent(LinksFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
