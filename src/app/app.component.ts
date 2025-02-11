import {Component} from '@angular/core';
import {RouterLink, RouterModule, RouterOutlet} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {MatExpansionModule} from "@angular/material/expansion";

import {MatCardModule} from "@angular/material/card";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, RouterLink, HomeComponent, MatExpansionModule,
    RouterModule , MatCardModule]
})
export class AppComponent {
  title = 'interactive-cv-app';
}
