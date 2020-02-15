import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LexarcanaPage } from './lexarcana.page';

describe('LexarcanaPage', () => {
  let component: LexarcanaPage;
  let fixture: ComponentFixture<LexarcanaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LexarcanaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LexarcanaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
