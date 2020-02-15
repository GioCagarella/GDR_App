import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ThewitcherPage } from './thewitcher.page';

describe('ThewitcherPage', () => {
  let component: ThewitcherPage;
  let fixture: ComponentFixture<ThewitcherPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThewitcherPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ThewitcherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
