import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesComponent } from './heroes.component';
import { FormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroesComponent],
      imports: [FormsModule]
    });
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have hero names', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const heroHeader = compiled.querySelector('h2')?.textContent;
    expect(heroHeader).toBe(component.hero.name.toUpperCase() + " Details");
    console.debug(component);
  });

  it('should change hero name', () => {
    const nameEl = fixture.debugElement.query(By.css("input[id=name]"))
    nameEl.nativeElement.value = "WinWin";
    nameEl.nativeElement.dispatchEvent(new Event('input'));
    expect(component.hero.name).toBe("WinWin");
  });
});
