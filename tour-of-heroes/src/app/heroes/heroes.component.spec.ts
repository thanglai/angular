import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { FormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeroesComponent,
        HeroDetailComponent,
      ],
      imports: [FormsModule]
    });
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have hero list', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toBe('My Heroes');
    const heroes = compiled.querySelectorAll('ul.heroes li');
    expect(heroes.length).toBe(9);
  });

  it('should display hero details', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const firstHero = fixture.debugElement.query(By.css('ul.heroes > li button'));
    firstHero?.nativeElement.dispatchEvent(new Event('click'));
    fixture.detectChanges();

    const heroHeader = compiled.querySelector('div');
    expect(heroHeader?.querySelector('h2')?.textContent).toBe(component.heroes[0].name.toUpperCase() + ' Details');
    expect(heroHeader?.querySelectorAll('div')[1]).toBeTruthy();
  });
});
