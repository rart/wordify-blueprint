import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularPostsAsideComponent } from './popular-posts-aside.component';

describe('PopularPostsAsideComponent', () => {
  let component: PopularPostsAsideComponent;
  let fixture: ComponentFixture<PopularPostsAsideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PopularPostsAsideComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularPostsAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
