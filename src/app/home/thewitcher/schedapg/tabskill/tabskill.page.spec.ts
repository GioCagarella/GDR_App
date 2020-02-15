import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabskillPage } from './tabskill.page';

describe('TabskillPage', () => {
  let component: TabskillPage;
  let fixture: ComponentFixture<TabskillPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabskillPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabskillPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
