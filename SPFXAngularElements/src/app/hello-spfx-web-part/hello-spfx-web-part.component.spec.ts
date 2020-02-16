import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloSpfxWebPartComponent } from './hello-spfx-web-part.component';

describe('HelloSpfxWebPartComponent', () => {
  let component: HelloSpfxWebPartComponent;
  let fixture: ComponentFixture<HelloSpfxWebPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelloSpfxWebPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloSpfxWebPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
