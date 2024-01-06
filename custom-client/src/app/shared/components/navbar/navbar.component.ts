import { ChangeDetectionStrategy, Component, inject, Signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { AuthenticationService } from '../../../core/services/authentication/authentication.service';
import { MEDIA_TYPES, MediaType } from '../../../core/types/media-type.type';
import { MediaTypePipe } from '../../pipes/media-type/media-type.pipe';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, MediaTypePipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  protected readonly types: Readonly<MediaType[]> = MEDIA_TYPES;
  protected readonly isAuthenticated: Signal<boolean> = inject(AuthenticationService).isAuthenticated;
}
