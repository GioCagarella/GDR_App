import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LexArcanaComponent } from './lex-arcana.component';

describe('LexArcanaComponent', () => {
  let component: LexArcanaComponent;
  let fixture: ComponentFixture<LexArcanaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LexArcanaComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LexArcanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
