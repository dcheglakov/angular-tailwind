import { Component, Input } from '@angular/core';
import { LucideAngularModule, Sun, Moon } from 'lucide-angular';

@Component({
  standalone: true,
  selector: 'app-section',
  templateUrl: './section.component.html',
  imports: [LucideAngularModule],
})
export class SectionComponent {
  @Input() title: string = 'Section';
  readonly SunIcon = Sun;
  readonly MoonIcon = Moon;
  isDarkMode: boolean = false;

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
  }
}
