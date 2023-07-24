import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes.component';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeroesComponent,
        HeroDetailComponent,
      ],
      imports: [
        FormsModule,
        RouterTestingModule,
      ]
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
});
