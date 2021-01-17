import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetayHomePage } from './detay-home.page';

describe('DetayHomePage', () => {
  let component: DetayHomePage;
  let fixture: ComponentFixture<DetayHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetayHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetayHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
