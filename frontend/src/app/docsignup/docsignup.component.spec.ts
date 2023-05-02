import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocsignupComponent } from './docsignup.component';

describe('DocsignupComponent', () => {
  let component: DocsignupComponent;
  let fixture: ComponentFixture<DocsignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocsignupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocsignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
