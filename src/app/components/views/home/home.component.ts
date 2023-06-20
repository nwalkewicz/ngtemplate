import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { MastheadComponent } from "../../partials/masthead/masthead.component";
import { DrawerComponent } from "../../partials/drawer/drawer.component";

@Component({
  standalone: true,
  imports: [
    CommonModule,
    MastheadComponent,
    DrawerComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.scss' ]
}) export class HomeComponent {}
