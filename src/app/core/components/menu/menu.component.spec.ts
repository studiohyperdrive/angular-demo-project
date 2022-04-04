import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

import { MenuComponent } from './menu.component';
import { ChangeDetectionStrategy } from '@angular/core';

describe('MenuComponent', () => {
  let fixture: ComponentFixture<MenuComponent>;
  let component: MenuComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        MenuComponent,
      ],
    })
      // INFO: This is needed to avoid change detection issues while testing
      .overrideComponent(MenuComponent, {
        set: { changeDetection: ChangeDetectionStrategy.Default }
      })
      .compileComponents();

    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  describe('Construct', () => {
    it('should parse the menu-items', () => {
      const initialMenuItems = fixture.debugElement.queryAll(By.css('.navbar-start .navbar-item'));
      expect(initialMenuItems.length).toBe(0);

      component.menuItems = [{
        label: 'Launches',
        route: '/launches',
      }];
      fixture.detectChanges();

      const updatedMenuItems = fixture.debugElement.queryAll(By.css('.navbar-start .navbar-item'));
      expect(updatedMenuItems.length).toBe(1);
    });
  });
});
