import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomShoppingListComponent } from './bottom-shopping-list.component';

describe('BottomShoppingListComponent', () => {
  let component: BottomShoppingListComponent;
  let fixture: ComponentFixture<BottomShoppingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomShoppingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomShoppingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
