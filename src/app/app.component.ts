import { Component } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { DataLayerService } from "./data-layer.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Tour of Heroes";

  constructor(router: Router, dataLayerService: DataLayerService) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
      }
    });
  }
}
