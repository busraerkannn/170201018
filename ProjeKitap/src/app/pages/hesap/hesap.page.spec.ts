import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HesapPage } from './hesap.page';

describe('HesapPage', () => {
  let component: HesapPage;
  let fixture: ComponentFixture<HesapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HesapPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HesapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
