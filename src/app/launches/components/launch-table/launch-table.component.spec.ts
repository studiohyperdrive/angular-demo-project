import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

import { LaunchTableComponent } from './launch-table.component';
import { LaunchesMock } from '../../../repositories/services/launch/launch.service.mock';
import { ChangeDetectionStrategy } from '@angular/core';

describe('LaunchTableComponent', () => {
  let fixture: ComponentFixture<LaunchTableComponent>;
  let component: LaunchTableComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        LaunchTableComponent,
      ],
    })
      // INFO: This is needed to avoid change detection issues while testing
      .overrideComponent(LaunchTableComponent, {
        set: { changeDetection: ChangeDetectionStrategy.Default }
      })
      .compileComponents();

    fixture = TestBed.createComponent(LaunchTableComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  describe('Construct', () => {
    it('should parse the launch-table items', () => {
      const initialTableItems = fixture.debugElement.queryAll(By.css('.table__content-row'));
      expect(initialTableItems.length).toBe(0);

      component.launches = LaunchesMock.results;
      fixture.detectChanges();

      const updatedTableItems = fixture.debugElement.queryAll(By.css('.table__content-row'));
      expect(updatedTableItems.length).toBe(1);
    });
  });
});
