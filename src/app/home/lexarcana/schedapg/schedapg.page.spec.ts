import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SchedapgPage } from './schedapg.page';

describe('SchedapgPage', () => {
  let component: SchedapgPage;
  let fixture: ComponentFixture<SchedapgPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedapgPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SchedapgPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
