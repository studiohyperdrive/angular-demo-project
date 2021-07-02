import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchFacade } from '../../facades/launch/launch.facade';
import { LaunchFacadeMock } from '../../facades/launch/launch.facade.mock';

import { LaunchOverviewPage } from './launch-overview.page';
import { LaunchTableComponent } from '../../components/launch-table/launch-table.component';

describe('LaunchOverviewPage', () => {
  let fixture: ComponentFixture<LaunchOverviewPage>;
  let component: LaunchOverviewPage;
  let facade: LaunchFacade;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [{
        provide: LaunchFacade,
        useValue: LaunchFacadeMock(),
      }],
      declarations: [
        LaunchTableComponent,
        LaunchOverviewPage,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LaunchOverviewPage);
    facade = TestBed.inject(LaunchFacade);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  describe('Construct', () => {
    it('should fetch the first batch of launches', () => {
      expect(facade.getLaunches).toHaveBeenCalled();
    });
  });
});
