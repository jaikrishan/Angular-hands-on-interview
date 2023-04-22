import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeAppComponent } from './pipe-app.component';

describe('PipeAppComponent', () => {
  let component: PipeAppComponent;
  let fixture: ComponentFixture<PipeAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipeAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipeAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
