import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilePreviewComponent } from './mobile-preview.component';

describe('MobilePreviewComponent', () => {
  let component: MobilePreviewComponent;
  let fixture: ComponentFixture<MobilePreviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [MobilePreviewComponent]
});
    fixture = TestBed.createComponent(MobilePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
