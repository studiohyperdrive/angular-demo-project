import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketDetailPage } from './rocket-detail.page';
import { RocketFacade } from '../../facades/rocket/rocket.facade';
import { RocketFacadeMock } from '../../facades/rocket/rocket.facade.mock';
import { RouterTestingModule } from '@angular/router/testing';

describe('RocketDetailPage', () => {
  let fixture: ComponentFixture<RocketDetailPage>;
  let component: RocketDetailPage;
  let facade: RocketFacade;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      providers: [{
        provide: RocketFacade,
        useValue: RocketFacadeMock(),
      }],
      declarations: [
        RocketDetailPage
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RocketDetailPage);
    facade = TestBed.inject(RocketFacade);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  describe('OnInit', () => {
    it('should fetch the rocket details', () => {
      expect(facade.getRocket).toHaveBeenCalled();
    });
  });
});
