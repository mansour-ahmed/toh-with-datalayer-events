import { DataLayerService } from "./data-layer.service";
import { Component } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";

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
        dataLayerService.addPageViewEvent(event.url);
      }
    });
  }
}
