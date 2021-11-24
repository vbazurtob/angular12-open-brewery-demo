import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutosuggestInputFieldComponent } from './autosuggest-input-field.component';

describe('AutosuggestInputFieldComponent', () => {
  let component: AutosuggestInputFieldComponent;
  let fixture: ComponentFixture<AutosuggestInputFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutosuggestInputFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutosuggestInputFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
