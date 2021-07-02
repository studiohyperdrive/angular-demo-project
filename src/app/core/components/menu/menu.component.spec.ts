import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

import { MenuComponent } from './menu.component';

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
    }).compileComponents();

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
