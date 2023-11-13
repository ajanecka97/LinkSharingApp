import { Component } from '@angular/core';
import { LinksFormComponent } from './links-form/links-form.component';
import { MobilePreviewComponent } from './mobile-preview/mobile-preview.component';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    standalone: true,
    imports: [NavbarComponent, MobilePreviewComponent, LinksFormComponent]
})
export class DashboardComponent {

}
