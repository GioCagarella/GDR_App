import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabstatPage } from './tabstat.page';

describe('TabstatPage', () => {
  let component: TabstatPage;
  let fixture: ComponentFixture<TabstatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabstatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabstatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
