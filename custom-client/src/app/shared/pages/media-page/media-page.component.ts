import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-media-page',
  standalone: true,
  imports: [NavbarComponent, RouterOutlet],
  templateUrl: './media-page.component.html',
  styleUrl: './media-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MediaPageComponent {}
