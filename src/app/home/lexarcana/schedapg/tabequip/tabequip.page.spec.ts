import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabequipPage } from './tabequip.page';

describe('TabequipPage', () => {
  let component: TabequipPage;
  let fixture: ComponentFixture<TabequipPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabequipPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabequipPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
