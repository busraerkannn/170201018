import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KitapDetayPage } from './kitap-detay.page';

describe('KitapDetayPage', () => {
  let component: KitapDetayPage;
  let fixture: ComponentFixture<KitapDetayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitapDetayPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KitapDetayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
