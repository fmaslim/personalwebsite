import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoHttpPracticeComponent } from './todo-http-practice.component';

describe('TodoHttpPracticeComponent', () => {
  let component: TodoHttpPracticeComponent;
  let fixture: ComponentFixture<TodoHttpPracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoHttpPracticeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoHttpPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
