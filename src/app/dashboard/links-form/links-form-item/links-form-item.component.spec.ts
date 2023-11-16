import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinksFormItemComponent } from './links-form-item.component';

describe('LinksFormItemComponent', () => {
  let component: LinksFormItemComponent;
  let fixture: ComponentFixture<LinksFormItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LinksFormItemComponent]
    });
    fixture = TestBed.createComponent(LinksFormItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
