import { AbstractControl, FormControl } from '@angular/forms';

export interface LinkForm {
  platform: FormControl<Platform | null>;
  link: FormControl<string | null>;
}

export enum Platform {
  github,
  youtube,
}
