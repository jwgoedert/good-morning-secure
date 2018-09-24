import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSectionsComponent } from './input-sections.component';

describe('InputSectionsComponent', () => {
  let component: InputSectionsComponent;
  let fixture: ComponentFixture<InputSectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputSectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputSectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
